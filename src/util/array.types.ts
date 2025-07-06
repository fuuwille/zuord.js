type ArrayIn<T> = T extends readonly (infer T)[] ? T : never;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

export type { ArrayIn as ZuordArrayIn };

export type { ArrayDepth as ZuordArrayDepth };