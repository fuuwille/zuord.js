type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

type IsArray<T> = [T]extends [readonly unknown[]] ? true : false;

type HasArray<T> = true extends (T extends readonly unknown[] ? true : false) ? true : false;

type HasAnyArray<U extends readonly unknown[]> = U extends readonly [unknown[]] ? true : ([HasArray<U[number]>] extends [true] ? true : false);

type HasAllArray<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasArray<First> extends true ? HasAllArray<Rest> : false) : true;

type AsArray<T> = T extends any ? (IsArray<T> extends true ? T : never) : never;

type AsNonArray<T> = T extends any ? (IsArray<T> extends true ? never : T) : never;

type AsOneArray<T> = (T extends readonly unknown[] ? T[number] : never)[];

export type { ArrayDepth as ZuordArrayDepth };
export type { IsArray as ZuordIsArray };
export type { HasArray as ZuordHasArray };
export type { HasAnyArray as ZuordHasAnyArray };
export type { HasAllArray as ZuordHasAllArray };
export type { AsArray as ZuordAsArray };
export type { AsNonArray as ZuordAsNonArray };
export type { AsOneArray as ZuordAsOneArray };