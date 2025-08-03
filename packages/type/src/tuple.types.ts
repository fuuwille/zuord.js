export type Tuple = TupleOf<unknown>;

export type TupleOf<T> = readonly [T, ...T[]];