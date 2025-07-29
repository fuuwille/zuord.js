import { ArrayOf } from "./array.types";
import { TupleOf } from "./tuple.types";

export type Plain = {
  [key: PropertyKey]: unknown;
};

export type PlainOf<K extends PropertyKey = PropertyKey, T = unknown> = {
  [key in K]: T;
};

export type PlainArray = ArrayOf<Plain>;

export type PlainTuple = TupleOf<Plain>;

export type PlainAsRequired<T> = T extends Plain ? {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: PlainAsRequired<Exclude<T[K], undefined>>;
} : T;