"use server";

import { ServerRequestBackend } from "@/types/request";
import moment from "moment";
import { cookies } from "next/headers";
import crypto from "crypto";
import { logError, logInfo } from "@/utils/log-helper";

export const apiHelper = async (
  url: string,
  func: string,
  data: any,
  fromIP?: string
) => {
  let process_status = 0;
  let res = new Response();
  try {
    const cookieStorage = cookies();
    const token = cookieStorage.get("vtc-jwt")?.value || "";
    const full_path = process.env.API_BACKEND + url;
    const requestInfo = new ServerRequestBackend({
      time: moment().unix(),
      sign: "",
      makerCode: "",
      func: func,
      data: data,
      fromIP: fromIP || "",
    });
    const key = `${requestInfo.time}${requestInfo.makerCode}${requestInfo.func}${process.env.BACKEND_KEYSIGN}`;
    const api_sign = crypto.createHash("sha256").update(key).digest("hex");
    requestInfo.sign = api_sign;
    res = await fetch(full_path, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify(requestInfo),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    process_status = 1;
    logInfo(
      "apiHelper",
      { full_path, requestInfo, key, token },
      { HTTP_STATUS: res.status, STATUS_TEXT: res.statusText }
    );
  } catch (error) {
    process_status = -1;
    logError("apiHelper", { error });
  }

  return {
    process_status,
    res: res.json(),
  };
};
