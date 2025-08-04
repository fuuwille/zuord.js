export type Tuple = TupleOf<unknown>;

export type TupleOf<T> = readonly [T, ...T[]];

export type TupleWith<TFirst, TRest> = readonly [TFirst, ...TRest[]];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T> = readonly [...T[], T];

export type EndingTupleWith<TRest extends unknown[], TLast extends unknown> = readonly [...TRest, TLast];

export type PureTuple = readonly [unknown] | [unknown, ...[unknown, ...unknown[]]];