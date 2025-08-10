import { ZuordType as Type } from ".";

export type Plain<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = { [key in TKey]: TValue; };

export type PlainArray<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = Type.Array<Plain<TKey, TValue>>;

export type PlainTuple<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = Type.Tuple<Plain<TKey, TValue>>;