import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, L extends ZuordUtil.Ignore = ZuordUtil.Ignore > = ZuordUtil.ShouldIgnore<T, L> extends true ? T : (
    ZuordUtil.HasPlain<T> extends true
    ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? V extends any ? NormalizeDirect<V, L> : never : never) | 
        (NormalizeDirect<ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>>, L>)
      )
    : T extends any ? NormalizeDirect<T, L> : never
);

type NormalizeDirect<T, L extends ZuordUtil.Ignore = ZuordUtil.Ignore > = ZuordUtil.ShouldIgnore<T, L> extends true ? T: (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K], L> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        NormalizeDirect<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
);

export type { Normalize as ZuordNormalize };
export type { NormalizeDirect as ZuordNormalizeDirect };