import type { FundType } from ".";

export type Array<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = FundType.Array<FundType.Plain<TKey, TValue>>;

export type Tuple<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = FundType.Tuple<FundType.Plain<TKey, TValue>>;