type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

type IsArray<T> = [T]extends [readonly unknown[]] ? true : false;

type IsSomeArray<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsArray<First> extends true ? true : IsSomeArray<Rest>) : false;

type IsAllArray<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsArray<First> extends true ? IsAllArray<Rest> : false) : true;

type HasArray<T> = true extends (T extends readonly unknown[] ? true : false) ? true : false;

type HasSomeArray<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasArray<First> extends true ? true : HasSomeArray<Rest>) : false;

type HasAllArray<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasArray<First> extends true ? HasAllArray<Rest> : false) : true;

type AsArray<T> = T extends any ? (IsArray<T> extends true ? T : never) : never;

type AsNonArray<T> = T extends any ? (IsArray<T> extends true ? never : T) : never;

type AsOneArray<T> = (T extends readonly unknown[] ? T[number] : never)[];

export type { ArrayDepth as ZuordArrayDepth };
export type { IsArray as ZuordIsArray };
export type { IsSomeArray as ZuordIsSomeArray };
export type { IsAllArray as ZuordIsAllArray };
export type { HasArray as ZuordHasArray };
export type { HasSomeArray as ZuordHasSomeArray };
export type { HasAllArray as ZuordHasAllArray };
export type { AsArray as ZuordAsArray };
export type { AsNonArray as ZuordAsNonArray };
export type { AsOneArray as ZuordAsOneArray };