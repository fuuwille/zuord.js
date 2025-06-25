import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, L extends object[] = ZuordUtil.Ignore > = ZuordUtil.ShouldIgnore<T, L> extends true ? T : (
    ZuordUtil.HasPlain<T> extends true
    ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? ZuordUtil.AsAny<NormalizeDirect<V, L>> : never) | 
        (NormalizeDirect<ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>>, L>)
      )
    : ZuordUtil.AsAny<NormalizeDirect<T, L>>
);

type NormalizeDirect<T, L extends object[] = ZuordUtil.Ignore > = ZuordUtil.ShouldIgnore<T, L> extends true ? T: (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K], L> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        Normalize<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
);

export type { Normalize as ZuordNormalize };
export type { NormalizeDirect as ZuordNormalizeDirect };