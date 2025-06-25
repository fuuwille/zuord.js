import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, I extends object[] = ZuordUtil.Ignored> = ZuordUtil.HasIgnored<T, I> extends false ? (
    ZuordUtil.HasPlain<T> extends true ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? Normalize<V, I> : never) | 
        (ZuordUtil.AsOnePlain<ZuordUtil.AsPlain<T>> extends infer T ? {
            [K in keyof T]: Normalize<T[K], I> 
        } : never)
    ) : 
    ZuordUtil.HasArray<T> extends true ? (
        (Normalize<Exclude<T, readonly unknown[]>>) |
        (Normalize<(T extends readonly unknown[] ? T[number] : never)>[])
    ) : T
) : Normalize<ZuordUtil.AsNonIgnored<T, I>> | ZuordUtil.AsIgnored<T, I>;

export type { Normalize as ZuordNormalize };