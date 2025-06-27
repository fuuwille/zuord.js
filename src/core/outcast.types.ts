type Outcast = object;

type OutcastConstructor = new (...args: any[]) => Outcast;

type Outcasts = Outcast[];

type OutcastConstructors = OutcastConstructor[];

type DefaultOutcasts = [
    //String,
    //Number,
    //Boolean,
    //BigInt,
    //Symbol,
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

type DefaultOutcastContructors = [
    //StringConstructor,
    //NumberConstructor,
    //BooleanConstructor,
    //BigIntConstructor,
    //SymbolConstructor,
    DateConstructor,
    FunctionConstructor,
    RegExpConstructor,
    ErrorConstructor,
    MapConstructor,
    SetConstructor,
    WeakMapConstructor,
    WeakSetConstructor,
    ArrayBufferConstructor,
    SharedArrayBufferConstructor,
    DataViewConstructor,
    PromiseConstructor,
    Int8ArrayConstructor,
    Uint8ArrayConstructor,
    Uint8ClampedArrayConstructor,
    Int16ArrayConstructor,
    Uint16ArrayConstructor,
    Int32ArrayConstructor,
    Uint32ArrayConstructor,
    Float32ArrayConstructor,
    Float64ArrayConstructor,
    BigInt64ArrayConstructor,
    BigUint64ArrayConstructor
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
export type { DefaultOutcastContructors as ZuordDefaultOutcastConstructors };
export type { ResolveOutcasts as ZuordResolveOutcasts };