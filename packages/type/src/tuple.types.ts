export type Tuple = TupleOf<unknown>;

export type TupleOf<T> = readonly [T, ...T[]];

export type TupleWith<TFirst, TRest> = readonly [TFirst, ...TRest[]];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T> = readonly [...T[], T];

export type EndingTupleWith<TRest, TLast> = readonly [...TRest[], TLast];