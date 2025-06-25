type Ignored = object[];

type DefaultIgnored = [
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

type WithIgnored<T extends Ignored> = [
    ...T,
    ...DefaultIgnored
]

export type { Ignored as ZuordIgnored };
export type { DefaultIgnored as ZuordDefaultIgnored };
export type { WithIgnored as ZuordWithIgnored };