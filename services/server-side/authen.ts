"use server";
import moment from "moment";
// import axios from 'axios';
import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { logError, logInfo } from "@/utils/log-helper";

export async function getCookie() {
  const headersInstance = headers();
  const domain = headersInstance.get("Host") || "";
  const cookieStorage = cookies();
  let currentCookie = "";
  if (domain.includes("vtc.vn")) {
    currentCookie = cookieStorage.get("auvtc.vn")?.value || "";
    logInfo("getCookie", currentCookie);
  }
  if (domain.includes("truykichpc.vn")) {
    currentCookie = cookieStorage.get("head_truykichpc.vn")?.value || "";
    logInfo("getCookie", currentCookie);
  }
  if (domain.includes("vtcgame.vn")) {
    currentCookie = cookieStorage.get(".vtcgame.vn")?.value || "";
    logInfo("getCookie", currentCookie);
  }
  if (domain.includes("localhost")) {
    logInfo("getCookie", { currentCookie: "localhost cookies" });
  }
  return currentCookie;
}

export async function requireAuth() {
  const currentCookie = await getCookie();
  const key = process.env.key || "";
  const KeySignAU = process.env.KeySign || "";
  let signText = "";
  if (process.env.NODE_ENV === "production") {
    signText = `${moment().unix()}${currentCookie}${key}${KeySignAU}`;
  } else {
    signText = `${moment().unix()}1${key}${KeySignAU}`;
  }
  const sign = crypto.createHash("sha256").update(signText).digest("hex");

  let api_oauth = "";
  if (process.env.NODE_ENV === "production") {
    api_oauth =
      `${
        process.env.API_OAUTH
      }/api/oauth?time=${moment().unix()}&data=${currentCookie}&key=${key}&sign=${sign}` ||
      "";
  } else {
    api_oauth =
      `${
        process.env.API_OAUTH
      }/api/oauth?time=${moment().unix()}&data=1&key=${key}&sign=${sign}` || "";
  }

  if (api_oauth) {
    logInfo("requireAuth", api_oauth);
    try {
      const res = await fetch(api_oauth, { method: "GET" });
      const data = await res.json();
      const tokenName = await getSiteName();
      logInfo("requireAuth", { tokenName, tokenValue: data.data });
      // let response = NextResponse.next();
      // // Set a cookie to hide the banner
      // response.cookies.set('show-banner', 'false');
      return {
        tokenName,
        tokenValue: data.data,
      };
    } catch (error) {
      logError("Oauth", error);
      const tokenName = await getSiteName();
      return {
        tokenName,
        tokenValue: "Oauth Exception",
      };
    }
  } else {
    return {
      tokenName: "",
      tokenValue: "",
    };
  }
}
async function getSiteName() {
  const headersInstance = headers();
  const domain = headersInstance.get("Host") || "";
  logInfo("getSiteName", domain);

  if (domain.includes("vtc.vn")) {
    return "auvtc.vn";
  }
  if (domain.includes("truykichpc.vn")) {
    return "head_truykichpc.vn";
  }
  if (domain.includes("vtcgame.vn")) {
    return ".vtcgame.vn";
  }
  if (domain.includes("localhost")) {
    return "localhost";
  }
  return "";
}
