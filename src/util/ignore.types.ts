import { ZuordUtil } from "@/util/alias.types";

type Ignored<U extends object[] = []> = [
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

type HasIgnored<T, I extends object[] = Ignored> = true extends (T extends (ZuordUtil.UnionOf<I> extends infer T ? T | readonly T[] : never) ? true : false) ? true : false;

type AsIgnored<T, I extends object[] = Ignored> = T extends any ? (HasIgnored<T, I> extends true ? T : never) : never;

type AsNonIgnored<T, I extends object[] = Ignored> = T extends any ? (HasIgnored<T, I> extends true ? never : T) : never;

export type { Ignored as ZuordIgnored };
export type { HasIgnored as ZuordHasIgnored };
export type { AsIgnored as ZuordAsIgnored };
export type { AsNonIgnored as ZuordAsNonIgnored };