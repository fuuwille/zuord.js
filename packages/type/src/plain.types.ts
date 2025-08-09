import { Array } from "./array.types";
import { TupleOf } from "./tuple.types";

export type Plain<K extends PropertyKey = PropertyKey, T extends unknown = unknown> = {
  [key in K]: T;
};

export type PlainArray = Array<Plain>;

export type PlainTuple = TupleOf<Plain>;