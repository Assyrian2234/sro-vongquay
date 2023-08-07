export interface TeamVoteParam {
  teamID: number;
  quantity: number;
}

export interface GiftTeamVoteParam {
  teamID: number;
}

export interface PagingParam {
  pageNum: number;
  pageSize: number;
}

export interface BirthdayCardReceiveGiftParam {
  giftType: number;
}

export interface SendBirthdayCardParam {
  quantity: number;
  content: string;
}

export interface TarotCardParam {
  eventID: number;
  logId?: number;
}
export interface AcccountIvalidParam {
  accountName: string;
  packetID: number;
}

export interface GiftHistoryListParam {
  eventID: number;
  pageNum: number;
  itemType?: number;
  pageSize: number;
}

export interface VoteHistoryParam {
  pageNum: number;
  pageSize: number;
  teamID: number;
}

export interface AccountGiftParam {
  logID: number;
  eventID: number;
  receiptType: number;
  accountReceived: string;
}
export interface AccountChooseVip {
  isVip: number;
}

export interface CongratulationGetListParam {
  detail: number;
}

export interface AccountUpdateAvatarParam {
  fileName: string;
  base64String: any;
}

export interface SpinItemParam {
  itemID: number;
  typeSpin: number;
}

export interface SpinBuyPaymentParam {
  buyType: number;
}
export interface AccountVerificationParam {
  fullName: string;
  phone: string;
  idCardNum: string;
  email: string;
  locationID: number;
  locationName: string;
  districtID: number;
  districtName: string;
  wardID: number;
  wardName: string;
  addressDetail: string;
  spinLogID: number;
}
