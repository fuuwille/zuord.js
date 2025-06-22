type HasArray<T> = true extends (T extends readonly unknown[] ? true : false) ? true : false;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

export type { HasArray as ZuordHasArray };
export type { ArrayDepth as ZuordArrayDepth };