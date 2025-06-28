type IsTrue<T> = [T] extends [true] ? true : false;

type IsSomeTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTrue<First> extends true ? true : IsSomeTrue<Rest>) : false;

export type { IsTrue as ZuordIsTrue };

export type { IsSomeTrue as ZuordIsSomeTrue };