export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

export type Plain<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = { [key in TKey]: TValue; };

export type Array<T extends unknown = unknown> = readonly T[];

export type Tuple<TItem extends unknown = unknown> = readonly [] | readonly [TItem] | readonly [TItem, ...TItem[]];

export type Func = (...args: unknown[]) => unknown;