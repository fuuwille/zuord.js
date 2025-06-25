import { ZuordUtil } from "@/util/alias.types";

type CanNormalize<T, I extends NormalizeIgnore = NormalizeIgnore> = T extends ZuordUtil.UnionOf<I> ? true : false;

type NormalizeIgnore<U extends object[] = []> = [
    ...U,
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

export type { CanNormalize as ZuordCanNormalize };
export type { NormalizeIgnore as ZuordNormalizeIgnore };