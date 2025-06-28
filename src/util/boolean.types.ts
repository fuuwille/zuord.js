type IsBoolean<T> = [T] extends [boolean] ? true : false;

type IsSomeBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsBoolean<First> extends true ? true : IsSomeBoolean<Rest>) : false;

type IsAllBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsBoolean<First> extends true ? IsAllBoolean<Rest> : false) : true;

type HasBoolean<T> = true extends (T extends any ? IsBoolean<T> : false) ? true : false;

type HasSomeBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasBoolean<First> extends true ? true : HasSomeBoolean<Rest>) : false;

type HasAllBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasBoolean<First> extends true ? HasAllBoolean<Rest> : false) : true;

export type { IsBoolean as ZuordIsBoolean };

export type { IsSomeBoolean as ZuordIsSomeBoolean };

export type { IsAllBoolean as ZuordIsAllBoolean };

export type { HasBoolean as ZuordHasBoolean };

export type { HasSomeBoolean as ZuordHasSomeBoolean };

export type { HasAllBoolean as ZuordHasAllBoolean };