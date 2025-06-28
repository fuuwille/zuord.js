type IsTrue<T> = [T] extends [true] ? true : false;

type IsSomeTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTrue<First> extends true ? true : IsSomeTrue<Rest>) : false;

type IsAllTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTrue<First> extends true ? IsAllTrue<Rest> : false) : true;

type HasTrue<T> = true extends (T extends any ? IsTrue<T> : false) ? true : false;

export type { IsTrue as ZuordIsTrue };

export type { IsSomeTrue as ZuordIsSomeTrue };

export type { IsAllTrue as ZuordIsAllTrue };

export type { HasTrue as ZuordHasTrue };