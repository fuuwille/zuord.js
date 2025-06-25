import { ZuordUtil } from "@/util/alias.types";

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

type ShouldIgnore<T, I extends object[] = Ignore> = T extends (ZuordUtil.UnionOf<I> extends infer T ? T | readonly T[] : never) ? true : false;

export type { Ignore as ZuordIgnore };
export type { ShouldIgnore as ZuordShouldIgnore };