import { ArrayOf } from "./array.types";
import { TupleOf } from "./tuple.types";

export type Plain = PlainOf<PropertyKey, unknown>;

export type PlainOf<K extends PropertyKey = PropertyKey, T = unknown> = {
  [key in K]: T;
};

export type PlainArray = ArrayOf<Plain>;

export type PlainTuple = TupleOf<Plain>;