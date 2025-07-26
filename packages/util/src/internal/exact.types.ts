import { ZuordType } from "@zuord/type";

export type Exact<Base, Input> = Base extends ZuordType.Plain ? (
    (ExactContent<Base, Input> & ExactExtra<Base, Input>) extends infer TExact ? {
        [K in keyof TExact]: TExact[K] 
    } : never
) : never;

export type ExactContent<TBase, TInput> = TBase extends ZuordType.Plain ? {
    [K in Exclude<keyof TInput, Exclude<keyof TInput, keyof TBase>>]: (
        [TInput[K]] extends [true] ? true : Exact<TBase[K], TInput[K]>
    )
} : never;

export type ExactExtra<TBase, TInput> = TBase extends ZuordType.Plain ? {
    [K in Exclude<keyof TInput, keyof TBase>]: never;
} : never;