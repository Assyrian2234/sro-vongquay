import { AxiosConfig } from "@/services/client-side/axios.config";
import { AxiosResponse } from "axios";
import { Data, MetaData } from "@/types/metadata";
import moment from "moment";
import { RequestBackend } from "@/types/request";

import {
  Banner,
  BirthdayCardGift,
  BirthdayCardInfo,
  BirthdayCardRank,
  BXHVipRes,
  CountGiftRes,
  ListTeamAPLInfo,
  SpinItemInfo,
  TarotInfo,
  VoteTeamGiftRes,
} from "@/type/apiTypes";
import {
  BirthdayCardReceiveGiftParam,
  GiftTeamVoteParam,
  PagingParam,
  SendBirthdayCardParam,
  SpinBuyPaymentParam,
  SpinItemParam,
  TarotCardParam,
  TeamVoteParam,
} from "@/type/paramTypes";
const api = AxiosConfig();

////

// lấy danh sách banner
export const getBannerList = (): Promise<AxiosResponse<MetaData<Banner>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "banner-get-list",
    data: {
      id: 0,
    },
  });
  return api.post("/Event", requestInfo);
};

//// APL Vote
// lấy danh sách team APL
interface VoteTeamListDataRespon {
  currVote: number;
  list: ListTeamAPLInfo[];
  total: number;
}
interface VoteTeamMetadata {
  code: number;
  mess: string;
  data: VoteTeamListDataRespon;
}
export const getTeamAPLList = (): Promise<AxiosResponse<VoteTeamMetadata>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "team-apl-get-list",
    data: "",
  });
  return api.post("/Event", requestInfo);
};

// vote cho 1 team
export const handleGuessVote = (
  data: TeamVoteParam
): Promise<AxiosResponse<MetaData<ListTeamAPLInfo>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "vote-insert",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
// vote xong nhận quà
export const getGiftGuessVote = (
  data: GiftTeamVoteParam
): Promise<AxiosResponse<MetaData<VoteTeamGiftRes>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "vote-receive-gift",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

//// gửi thiệp
// lấy số thiệp đã gửi
export const getNumberBirthDayCard = (): Promise<
  AxiosResponse<Data<BirthdayCardInfo>>
> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "birthday-card-getinfo",
    data: "",
  });
  return api.post("/Event", requestInfo);
};
// lấy bảng xếp hạng thiệp
export const getRankBirthDayCard = (
  data: PagingParam
): Promise<AxiosResponse<MetaData<BirthdayCardRank>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "birthday-card-rank-get-list",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
// danh sách mốc gửi thiệp
export const getPostCardList = (): Promise<
  AxiosResponse<MetaData<BirthdayCardGift>>
> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "birthday-card-get-list",
    data: "",
  });
  return api.post("/Event", requestInfo);
};

// nhận quà mốc gửi thiệp
export const getBirthdayCardReceiveGift = (
  data: BirthdayCardReceiveGiftParam
): Promise<AxiosResponse<Data<CountGiftRes>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "birthday-card-receive-gift",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

// gửi thiệp
export const sendBirthdayCard = (
  data: SendBirthdayCardParam
): Promise<AxiosResponse<MetaData<VoteTeamGiftRes>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "birthday-card-insert-payment",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

////Rút bài tarot
//Mở bài tarot
export const getTarotCard = (
  data: TarotCardParam
): Promise<AxiosResponse<any>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "tarot-insert",
    data: data,
  });
  return api.post("/Event", requestInfo);
};

export const receiveTarotCard = (
  data: TarotCardParam
): Promise<AxiosResponse<Data<VoteTeamGiftRes>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "tarot-share-success",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
// mua lượt vòng quay
export const spinBuyPayment = (
  data: SpinBuyPaymentParam
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "buy-spin-insert-payment",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
export const registerBXHVip = (
  data: any
): Promise<AxiosResponse<Data<any>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "account-register-bxh-vip",
    data: data,
  });
  return api.post("/Event", requestInfo);
};
export const getBXHVip = (): Promise<AxiosResponse<MetaData<BXHVipRes>>> => {
  const requestInfo = new RequestBackend({
    time: moment().unix(),
    fromIP: "",
    sign: "",
    makerCode: process.env.NEXT_PUBLIC_MAKER_CODE || "",
    func: "rank-account-vip-get-list",
    data: "",
  });
  return api.post("/Event", requestInfo);
};
