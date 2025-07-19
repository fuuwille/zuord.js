export type Outcast = object;

export type OutcastConstructor = new (...args: any[]) => Outcast;

export type Outcasts = Outcast[];

export type OutcastConstructors = OutcastConstructor[];

export type DefaultOutcasts = [
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

export type DefaultOutcastConstructors = [
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

export type ResolveOutcasts<T extends Outcasts> = [
    ...T,
    ...DefaultOutcasts
]