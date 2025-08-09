export type Tuple<T extends unknown = unknown> = readonly [T] | readonly [T, ...T[]];

export type TupleFirst<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [TFirst, ...TRest];

export type TupleLast<TRest extends unknown[] = unknown[], TLast extends unknown = unknown> = readonly [...TRest, TLast];

export type TupleNest<T extends unknown = unknown> = readonly [T] | [T, ...[T, ...T[]]];