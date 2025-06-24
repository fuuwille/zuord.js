import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, L extends object[] = []> = (
    ZuordUtil.HasPlain<T> extends true
    ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? V extends any ? NormalizeDirect<V> : never : never) | 
        (NormalizeDirect<ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>>>)
      )
    : T extends any ? NormalizeDirect<T> : never
);

type NormalizeDirect<T, L extends object[] = []> = (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K], L> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        NormalizeDirect<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };
export type { NormalizeDirect as ZuordNormalizeDirect };