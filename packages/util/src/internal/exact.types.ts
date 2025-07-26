import { ZuordType } from "@zuord/type";

export type Exact<Base, Input> = (ExactContent<Base, Input> & {
        [K in Exclude<keyof Input, keyof Base>]: never;
}) extends infer TExact ? { [K in keyof TExact]: TExact[K] } : never;

export type ExactContent<TBase, TInput> = TBase extends ZuordType.Plain ? {
    [K in Exclude<keyof TInput, Exclude<keyof TInput, keyof TBase>>]: (
        [TInput[K]] extends [true] ? true : Exact<TBase[K], TInput[K]>
    )
} : never;
