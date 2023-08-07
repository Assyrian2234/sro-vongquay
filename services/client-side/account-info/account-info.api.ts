import { AxiosConfig } from "@/services/client-side/axios.config";
import { AxiosResponse } from "axios";
import { Data, MetaData } from "@/types/metadata";
import moment from "moment";
import { RequestBackend } from "@/types/request";

import {
  AcccountIvalidParam,
  AccountChooseVip,
  AccountGiftParam,
  AccountUpdateAvatarParam,
  AccountVerificationParam,
  CongratulationGetListParam,
  GiftHistoryListParam,
  PagingParam,
  VoteHistoryParam,
} from "@/type/paramTypes";
import {
  AccountInventory,
  AccountVerification,
  AccountVipInfo,
  ReceiveGiftHistory,
  VoteHistory,
} from "@/type/apiTypes";
import { AccountInfo } from "@/type/apiTypes";
import { AccountFullInfoType } from "@/type/componentTypes";
const api = AxiosConfig();

export const getAccountInfo = (): Promise<AxiosResponse<any>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "",
    data: "",
  });
  return api.post("/UserInfo", requestInfo);
};
export const getFullAccountInfo = (): Promise<
  AxiosResponse<Data<AccountFullInfoType>>
> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-get-info",
    data: "",
  });
  return api.post("/Event", requestInfo);
};
// check tài khoản tồn tại để nhận quà
export const checkIvalidAccount = (
  data: AcccountIvalidParam
): Promise<AxiosResponse<MetaData<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-check-receive",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// nhận hoặc tặng quà
export const handleAccountGift = (
  data: AccountGiftParam
): Promise<AxiosResponse<MetaData<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "item-add-in-game",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// Lịch sử nhận quà
export const getGiftHistoryList = (
  data: GiftHistoryListParam
): Promise<AxiosResponse<MetaData<ReceiveGiftHistory>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-history-get-list",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// danh sách lịch sử đặt cửa
export const getVoteHistoryList = (
  data: VoteHistoryParam
): Promise<AxiosResponse<MetaData<VoteHistory>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-vote-history-get-list",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

export const getAccountLogin = (): Promise<AxiosResponse<MetaData<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-login",
    data: "",
  });
  return api.post("/Event", requestInfo);
};

// lấy danh sách kho đồ

export const getAccountBag = (
  data: GiftHistoryListParam
): Promise<AxiosResponse<MetaData<AccountInventory>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-inventory-get-list",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// chọn vip hay đại gia
export const accountChooseVip = (
  data: AccountChooseVip
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-register-svip",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// chạy chữ
export const getListCongratulation = (
  data: CongratulationGetListParam
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "congratulation-get-list",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

//update Avatar
export const accountUpdateAvatar = (
  data: AccountUpdateAvatarParam
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-update-avatar",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
// Lấy số dư tài khoản
export const accountGetBalance = (): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-balance",
    data: "",
  });
  return api.post("/Event", requestInfo);
};
// Lấy thông tin xem đã đăng ký topvip hay chưa
export const accountGetVipInfo = (): Promise<
  AxiosResponse<Data<AccountVipInfo>>
> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-vip-get-info",
    data: "",
  });
  return api.post("/Event", requestInfo);
};

// check xem đã tới thời gian sự kiện hay chưa
export const accountCheckEventTime = (
  data: any
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "check-event-time-account-vip",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
export const accountVerificationUpdate = (
  param: AccountVerificationParam
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-verification-update",
    data: param,
  });
  return api.post("/Event", requestInfo);
};
export const accountVerificationGetInfo = (): Promise<
  AxiosResponse<Data<any>>
> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-verification-get-info",
    data: "",
  });
  return api.post("/Event", requestInfo);
};
