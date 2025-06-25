import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, L extends object[] = ZuordUtil.Ignore > = ZuordUtil.ShouldIgnore<T, L> extends true ? T : (
    ZuordUtil.HasPlain<T> extends true ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? Normalize<V, L> : never) | 
        (ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>> extends infer T ? {
            [K in keyof T]: Normalize<T[K], L> 
        } : never)
    ) : ZuordUtil.HasArray<T> extends true ? (
        Normalize<Exclude<T, readonly unknown[]>>|
        Normalize<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
);

export type { Normalize as ZuordNormalize };