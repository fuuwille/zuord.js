type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

type IsArray<T> = [T]extends [readonly unknown[]] ? true : false;

type HasArray<T> = true extends (T extends readonly unknown[] ? true : false) ? true : false;

type HasAnyArray<U extends readonly unknown[]> = U extends readonly [unknown[]] ? true : ([HasArray<U[number]>] extends [true] ? true : false);

type HasAllArray<U extends readonly unknown[]> = U extends readonly [unknown[]] ? true : ([HasArray<U[number]>] extends [boolean] ? false : true);

export type { ArrayDepth as ZuordArrayDepth };
export type { IsArray as ZuordIsArray };
export type { HasArray as ZuordHasArray };
export type { HasAnyArray as ZuordHasAnyArray };
export type { HasAllArray as ZuordHasAllArray };