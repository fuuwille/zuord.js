import type { ZuordType } from ".";

export type Array<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = ZuordType.Array<ZuordType.Plain<TKey, TValue>>;

export type Tuple<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = ZuordType.Tuple<ZuordType.Plain<TKey, TValue>>;