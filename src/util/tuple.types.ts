type IsTuple<T> = T extends readonly any[] ? (
    [number] extends [T['length']] ? false : true
) : false;

type IsSomeTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTuple<First> extends true ? true : IsSomeTuple<Rest>) : false;

type IsAllTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTuple<First> extends true ? IsAllTuple<Rest> : false) : true;

export type { IsTuple as ZuordIsTuple };
export type { IsSomeTuple as ZuordIsSomeTuple };
export type { IsAllTuple as ZuordIsAllTuple };