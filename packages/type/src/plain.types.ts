import { ZuordType as Type } from "./type.types";

export namespace ZuordPlain {
    export type Array<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = Type.Array<Type.Plain<TKey, TValue>>;

    export type Tuple<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = Type.Tuple<Type.Plain<TKey, TValue>>;
}