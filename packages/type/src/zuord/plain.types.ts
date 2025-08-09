import { ZuordType } from ".";

export type Plain<K extends PropertyKey = PropertyKey, T extends unknown = unknown> = {
  [key in K]: T;
};

export type PlainArray<K extends PropertyKey = PropertyKey, T extends unknown = unknown> = ZuordType.Array<Plain<K, T>>;

export type PlainTuple<K extends PropertyKey = PropertyKey, T extends unknown = unknown> = ZuordType.Tuple<Plain<K, T>>;