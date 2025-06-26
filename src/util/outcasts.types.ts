import { ZuordUtil } from "@/util/alias.types";

type DefaultIgnored<U extends object[] = []> = [
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

type HasOutcasts<T, I extends object[] = DefaultIgnored> = true extends (T extends (ZuordUtil.UnionOf<I> extends infer T ? T | readonly T[] : never) ? true : false) ? true : false;

type AsOutcasts<T, I extends object[] = DefaultIgnored> = T extends any ? (HasOutcasts<T, I> extends true ? T : never) : never;

type AsNonOutcasts<T, I extends object[] = DefaultIgnored> = T extends any ? (HasOutcasts<T, I> extends true ? never : T) : never;

export type { DefaultIgnored as ZuordDefaultOutcasts };
export type { HasOutcasts as ZuordHasOutcasts };
export type { AsOutcasts as ZuordAsOutcasts };
export type { AsNonOutcasts as ZuordAsNonOutcasts };