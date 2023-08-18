export interface MetaData<T> {
  status: number;
  message: string;
  data: DataT<T>;
}

export interface DataT<T> {
  total: number;
  list: T[];
}

export interface Data<T> {
  status: number;
  message: string;
  data: T;
}
