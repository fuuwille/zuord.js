type Outcast = object;

type OutcastConstructor = new (...args: any[]) => Outcast;

type Outcasts = Outcast[];

type OutcastConstructors = OutcastConstructor[];

type DefaultOutcasts = [
    Date,
    Function,
    RegExp,
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

export type { Outcast as ZuordOutcast };
export type { OutcastConstructor as ZuordOutcastConstructor };
export type { Outcasts as ZuordOutcasts };
export type { OutcastConstructors as ZuordOutcastConstructors };
export type { DefaultOutcasts as ZuordDefaultOutcasts };
export type { ResolveOutcasts as ZuordResolveOutcasts };