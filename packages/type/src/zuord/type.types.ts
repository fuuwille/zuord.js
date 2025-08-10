export namespace Type {
    export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

    export type Plain<TKey extends PropertyKey = PropertyKey, TValue extends unknown = unknown> = { [key in TKey]: TValue; };
}