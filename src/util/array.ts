type IsArray<T> = ArrayDepth<T> extends 0 ? false : true;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

//

export type ZuordIsArray<T> = IsArray<T>;

export type ZuordArrayDepth<T> = ArrayDepth<T>;