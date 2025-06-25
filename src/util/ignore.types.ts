import { ZuordUtil } from "@/util/alias.types";

type Ignore<U extends object[] = []> = [
    ...U,
    Date,
    Function,
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

type ShouldIgnore<T, I extends object[] = Ignore> = true extends (T extends (ZuordUtil.UnionOf<I> extends infer T ? T | readonly T[] : never) ? true : false) ? true : false;

type AsIgnore<T, I extends object[] = Ignore> = T extends any ? (ShouldIgnore<T, I> extends true ? T : never) : never;

type AsNonIgnore<T, I extends object[] = Ignore> = T extends any ? (ShouldIgnore<T, I> extends true ? never : T) : never;

export type { Ignore as ZuordIgnore };
export type { ShouldIgnore as ZuordShouldIgnore };
export type { AsIgnore as ZuordAsIgnore };
export type { AsNonIgnore as ZuordAsNonIgnore };