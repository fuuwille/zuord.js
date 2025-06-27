type IsTuple<T> = T extends readonly any[] ? (
    [number] extends [T['length']] ? false : true
) : false;

type IsSomeTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTuple<First> extends true ? true : IsSomeTuple<Rest>) : false;

type IsAllTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsTuple<First> extends true ? IsAllTuple<Rest> : false) : true;

type HasTuple<T> = [T] extends [never] ? false : ((T extends any ? IsTuple<T> : false) extends true ? true : false);

type HasSomeTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasTuple<First> extends true ? true : HasSomeTuple<Rest>) : false;

type HasAllTuple<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasTuple<First> extends true ? HasAllTuple<Rest> : false) : true;

type ExtractTuple<T> = T extends any ? (IsTuple<T> extends true ? T : never) : never;

export type { IsTuple as ZuordIsTuple };
export type { IsSomeTuple as ZuordIsSomeTuple };
export type { IsAllTuple as ZuordIsAllTuple };
export type { HasTuple as ZuordHasTuple };
export type { HasSomeTuple as ZuordHasSomeTuple };
export type { HasAllTuple as ZuordHasAllTuple };
export type { ExtractTuple as ZuordExtractTuple };