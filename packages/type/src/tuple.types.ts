export type Tuple<T extends unknown = unknown> = readonly [T, ...T[]];

export type TupleWith<TFirst, TRest> = readonly [TFirst, ...TRest[]];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T> = readonly [...T[], T];

export type EndingTupleWith<TRest extends unknown[], TLast extends unknown> = readonly [...TRest, TLast];

export type PureTuple = PureTupleOf<unknown>;

export type PureTupleOf<T> = readonly [T] | [T, ...[T, ...T[]]];