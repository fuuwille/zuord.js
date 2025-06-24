import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, L extends object[] = BlackList> = T extends ZuordUtil.UnionOf<L> ? T : (
    ZuordUtil.HasPlain<T> extends true
    ? (
        (ZuordUtil.AsNonPlain<T> extends infer V ? V extends any ? NormalizeDirect<V, L> : never : never) | 
        (NormalizeDirect<ZuordUtil.MergeUnionObjects<ZuordUtil.AsPlain<T>>, L>)
      )
    : T extends any ? NormalizeDirect<T, L> : never
);

type NormalizeDirect<T, L extends object[] = BlackList> = (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K], L> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        NormalizeDirect<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };
export type { NormalizeDirect as ZuordNormalizeDirect };

type BlackList = [
    Date,
    RegExp,
    Function,
    Error,
    Map<any, any>,
    Set<any>,
    WeakMap<any, any>,
    WeakSet<any>,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Promise<any>,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
]