export type Tuple = readonly [unknown, ...unknown[]] | [];

export type TupleOf<T> = readonly [T, ...T[]] | [];