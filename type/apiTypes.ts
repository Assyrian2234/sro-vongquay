export interface Banner {
  BannerID: number;
  Image: string;
  Link: string;
  Position: number;
}

export interface ReceiveGiftHistory {
  STT: number;
  CrTime: string;
  Content: string;
  Detail: string;
  Value: string;
  Status: number;
}

export interface VoteHistory {
  STT: number;
  LogID: number;
  CrTime: string;
  TeamName: string;
  Status: Number;
  Detail: string;
}

export interface AccountInfo {
  AccountName: string;
  FullName: string;
  Phone: string;
  Email: string;
  UserGender: string;
  RegisterDate: string;
  LocationID: number;
  LocationName: string;
  DistrictID: number;
  DistrictName: string;
  WardID: number;
  WardNumber: string;
  AddressDetail: string;
}

export interface TarotInfo {
  CardID: number;
  CardName: string;
  CardDetail: string;
  CardImage: string;
}

export interface BirthdayCardInfo {
  SumBirthdayCard: number;
}

export interface BirthdayCardGift {
  GiftTypeID: number;
  GiftTypeName: string;
  MinTrans: number;
  MaxTrans: number;
  AccountTrans: number;
  LevelStatus: number;
  ReceiptStatus: number;
  PacketID: number;
  ItemName: string;
  Image: string;
}
export interface BirthdayCardRank {
  AccountID: number;
  AccountNick: string;
  Avatar: string;
  TotalSent: number;
  LastSent: string;
  TopRank: number;
}

export interface ListTeamAPLInfo {
  TeamID: number;
  TeamName: string;
  TeamImage: string;
  Mem1Name: string;
  Mem1Nick: string;
  Mem2Name: string;
  Mem2Nick: string;
  Mem3Name: string;
  Mem3Nick: string;
  VoteNum: number;
}

export interface VoteTeamGiftRes {
  LogID: number;
  ItemID: number;
  ItemName: string;
  IteamImage: string;
  PacketID: number;
}
export interface CountGiftRes {
  LogID: number;
  ItemID: number;
  ItemName: string;
  ItemImage: string;
  PacketID: number;
}

export interface SpinItemInfo {
  ItemID: number;
  ItemName: string;
  ImageName: string;
  Gender: number;
  Description: string;
}

export interface SpinLogInfo {
  STT: number;
  Time: string;
  Description: string;
  ItemName: string;
  AccountReceived: string;
  Status: number;
  StatusText: string;
}

export interface AccountInventory {
  STT: number;
  CrTime: string;
  EventID: number;
  EventName: string;
  Detail: string;
  AccountReceived: string;
  Status: number;
  StatusText: string;
  ItemID: number;
  LogID: number;
  ItemNote: string;
  ItemType: number;
  ItemImage: string;
  PacketID: number;
}

export interface BXHVipRes {
  TopVip: number;
  AccountID: number;
  AccountName: string;
  VipScore: number;
  AccountAvatar: string;
}

export interface AccountVipInfo {
  AccountID: number;
  AccountName: string;
  Fullname: string;
  Mobile: string;
  VipScore: number;
  CrDate: string;
  CrTime: string;
  UpdatedTime: string;
  UpdatedDate: string;
}
export interface AccountVerification {
  accountName: string;
  fullName: string;
  phone: string;
  email: string;
  locationID: number;
  locationName: string;
  districtID: number;
  districtName: string;
  wardID: number;
  wardName: string;
  addressDetail: string;
  logID: number;
}

export interface AccountVerification {
  accountName: string;
  fullName: string;
  phone: string;
  email: string;
  locationID: number;
  locationName: string;
  districtID: number;
  districtName: string;
  wardID: number;
  wardName: string;
  addressDetail: string;
  logID: number;
}
export interface City {
  locationID: number;
  locationName: string;
  nationalID: number;
  position: number;
  status: number;
  crDatetime: number;
}
export interface District {
  districtID: number;
  districtName: string;
  locationID: number;
  position: number;
  status: number;
  crDatetime: number;
}
export interface Ward {
  districtID: number;
  locationID: number;
  position: number;
  status: number;
  wardID: number;
  wardName: string;
  crDatetime: number;
}
