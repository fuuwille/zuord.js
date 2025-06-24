import { ZuordUtil } from "@/util/alias.types";

type Normalize<T> = (
    ZuordUtil.HasPlain<T> extends true
    ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? V extends any ? NormalizeRaw<V> : never : never) | 
        (NormalizeRaw<ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>>>)
      )
    : T extends any ? NormalizeRaw<T> : never
);

type NormalizeRaw<T> = (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        Normalize<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };