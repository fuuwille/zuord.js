export type Tuple = TupleOf<unknown>;

export type TupleOf<T> = readonly [T, ...T[]];

export type EndingTuple = EndingTupleOf<unknown>;

export type EndingTupleOf<T> = readonly [...T[], T];