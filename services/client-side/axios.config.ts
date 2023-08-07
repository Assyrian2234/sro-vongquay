"use client";
import { logInfo } from "@/utils/log-helper";
import axios from "axios";

export const getToken = () => {
  let jwt = "";
  if (typeof window !== "undefined") {
    const domain = window.location.hostname || "";
    logInfo("getToken", { domain });

    if (domain.includes("vtc.vn")) {
      let target = localStorage.getItem("auvtc.vn");
      if (target != null) {
        jwt = target;
      } else {
        window.location.reload();
      }
    }
    if (domain.includes("truykichpc.vn")) {
      let target = localStorage.getItem("head_truykichpc.vn");
      if (target != null) {
        jwt = target;
      } else {
        window.location.reload();
      }
    }
    if (domain.includes("vtcgame.vn")) {
      let target = localStorage.getItem(".vtcgame.vn");
      if (target != null) {
        jwt = target;
      } else {
        window.location.reload();
      }
    }
    if (domain.includes("localhost")) {
      let target = localStorage.getItem("localhost");
      if (target != null) {
        jwt = target;
      } else {
        window.location.reload();
      }
    }
  }
  return jwt;
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;
export const AxiosConfig = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BACKEND,
    headers: { authorization: getAuthorizationHeader() },
  });
  return instance;
};
