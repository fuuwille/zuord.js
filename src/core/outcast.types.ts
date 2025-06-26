type Outcasts = object[];

type DefaultOutcasts = [
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

type ResolveOutcasts<T extends Outcasts> = [
    ...T,
    ...DefaultOutcasts
]

export type { Outcasts as ZuordOutcasts };
export type { DefaultOutcasts as ZuordDefaultOutcasts };
export type { ResolveOutcasts as ZuordResolveOutcasts };