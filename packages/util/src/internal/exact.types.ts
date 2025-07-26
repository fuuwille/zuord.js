import { ZuordType } from "@zuord/type";

export type Exact<TBase, TInput> = TBase extends ZuordType.Plain ? (
    (ExactContent<TBase, TInput> & ExactExtra<TBase, TInput>) extends infer TExact ? {
        [K in keyof TExact]: TExact[K] 
    } : never
) : never;

export type ExactContent<TBase, TInput> = {
    [K in Exclude<keyof TInput, Exclude<keyof TInput, keyof TBase>>]: (
        [TInput[K]] extends [true] ? true : (
            K extends keyof TBase ? Exact<TBase[K], TInput[K]> : never
        )
    )
};

export type ExactExtra<TBase, TInput> = {
    [K in Exclude<keyof TInput, keyof TBase>]: never;
}