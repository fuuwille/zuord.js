type IsArray<T> = ArrayDepth<T> extends 0 ? false : true;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

//

export type { IsArray as ZuordIsArray };
export type { ArrayDepth as ZuordArrayDepth };