import { ZuordType } from ".";

export type Plain<K extends PropertyKey = PropertyKey, T extends unknown = unknown> = {
  [key in K]: T;
};

export type PlainArray = ZuordType.Array<Plain>;

export type PlainTuple = ZuordType.Tuple<Plain>;