export type Tuple<T extends unknown = unknown> = readonly [T, ...T[]];

export type TupleWith<TFirst extends unknown = unknown, TRest extends unknown = unknown> = readonly [TFirst, ...TRest[]];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T> = readonly [...T[], T];

export type EndingTupleWith<TRest extends unknown[], TLast extends unknown> = readonly [...TRest, TLast];

export type PureTuple = PureTupleOf<unknown>;

export type PureTupleOf<T> = readonly [T] | [T, ...[T, ...T[]]];