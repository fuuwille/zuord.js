type IsBoolean<T> = [T] extends [boolean] ? true : false;

type IsSomeBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsBoolean<First> extends true ? true : IsSomeBoolean<Rest>) : false;

export type { IsBoolean as ZuordIsBoolean };

export type { IsSomeBoolean as ZuordIsSomeBoolean };