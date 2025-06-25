import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, I extends object[] = ZuordUtil.DefaultIgnored> = ZuordUtil.HasIgnored<T, I> extends false ? (
    ZuordUtil.HasPlain<T> extends true ? (
        (ZuordUtil.AsNonPlain<T> extends infer T ? Normalize<T, I> : never) | 
        (ZuordUtil.AsOnePlain<T> extends infer T ? { [K in keyof T]: Normalize<T[K], I> } : never)
    ) : 
    ZuordUtil.HasArray<T> extends true ? (
        (ZuordUtil.AsNonArray<T> extends infer T ? Normalize<T, I> : never) |
        (ZuordUtil.AsOneArray<T> extends infer T ? Normalize<Extract<T, readonly unknown[]>[number], I>[] : never)
    ) : T
) : Normalize<ZuordUtil.AsNonIgnored<T, I>, I> | ZuordUtil.AsIgnored<T, I>;

export type { Normalize as ZuordNormalize };