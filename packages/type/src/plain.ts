import { TupleOf } from "./tuple";

export type Plain = {
  [key: PropertyKey]: unknown;
};

export type PlainTuple = TupleOf<Plain>;

export type PlainArray = readonly Plain[];

export type PlainAsRequired<T> = T extends Plain ? {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: PlainAsRequired<Exclude<T[K], undefined>>;
} : T;