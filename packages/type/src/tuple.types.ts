export type Tuple = TupleOf<unknown>;

export type TupleOf<T extends unknown> = readonly [T, ...T[]];

export type TupleWith<TFirst extends unknown, TRest extends unknown[]> = readonly [TFirst, ...TRest];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T extends unknown> = readonly [...T[], T];

export type EndingTupleWith<TRest extends unknown[], TLast extends unknown> = readonly [...TRest, TLast];