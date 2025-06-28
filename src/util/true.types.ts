type IsTrue<T> = [T] extends [true] ? true : false;

type IsSomeTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTrue<First> extends true ? true : IsSomeTrue<Rest>) : false;

type IsAllTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTrue<First> extends true ? IsAllTrue<Rest> : false) : true;

type HasTrue<T> = true extends (T extends any ? IsTrue<T> : false) ? true : false;

type HasSomeTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasTrue<First> extends true ? true : HasSomeTrue<Rest>) : false;

type HasAllTrue<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasTrue<First> extends true ? HasAllTrue<Rest> : false) : true;

type ExtractTrue<T> = HasTrue<T> extends true ? true : never;

type ExcludeTrue<T> = T extends any ? (IsTrue<T> extends false ? T : never) : never;

export type { IsTrue as ZuordIsTrue };

export type { IsSomeTrue as ZuordIsSomeTrue };

export type { IsAllTrue as ZuordIsAllTrue };

export type { HasTrue as ZuordHasTrue };

export type { HasSomeTrue as ZuordHasSomeTrue };

export type { HasAllTrue as ZuordHasAllTrue };

export type { ExtractTrue as ZuordExtractTrue };

export type { ExcludeTrue as ZuordExcludeTrue };