export interface MetaData<T> {
  code: number;
  mess: string;
  data: Data<T>;
}

export interface Data<T> {
  total: number;
  list: T[];
  giftSpin?: string;
  totalSpin?: number;
  spinType?: string;
  personalRank?: T;
  currReceive?: number;
  receivedItem?: T;
}

export interface Data<T> {
  code: number;
  mess: string;
  data: T;
}
