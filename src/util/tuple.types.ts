type IsTuple<T> = T extends readonly any[] ? (
    [number] extends [T['length']] ? false : true
) : false;

type IsSomeTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTuple<First> extends true ? true : IsSomeTuple<Rest>) : false;

export type { IsTuple as ZuordIsTuple };
export type { IsSomeTuple as ZuordIsSomeTuple };