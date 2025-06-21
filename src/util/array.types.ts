type IsArray<T> = true extends (T extends any[] ? true : false) ? true : false;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

export type { IsArray as ZuordIsArray };
export type { ArrayDepth as ZuordArrayDepth };