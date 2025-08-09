export type Tuple<T extends unknown = unknown> = readonly [T, ...T[]];

export type TupleFirst<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [TFirst, ...TRest];

export type TupleLast<TRest extends unknown[], TLast extends unknown> = readonly [...TRest, TLast];

export type PureTuple = PureTupleOf<unknown>;

export type PureTupleOf<T> = readonly [T] | [T, ...[T, ...T[]]];