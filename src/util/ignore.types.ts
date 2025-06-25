import { ZuordUtil } from "@/util/alias.types";

type CanIgnore<T, I extends Ignore = Ignore> = T extends ZuordUtil.UnionOf<I> ? false : true;

type Ignore<U extends object[] = []> = [
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

export type { CanIgnore as ZuordCanIgnore };
export type { Ignore as ZuordIgnore };