import type { FundType } from "@zuord/type";

export type ResolveKeys<TBase, TInput> = TBase extends FundType.Plain ? (
    (ResolveIncludedKeys<TBase, TInput> & ResolveExcludedKeys<TBase, TInput>) extends infer T ? {
        [K in keyof T as [undefined] extends [T[K]] ? never : K]: T[K] extends never ? never : T[K];
    } : never
) : TInput;

export type ResolveIncludedKeys<TBase extends FundType.Plain, TInput> = {
    [K in keyof TInput]: K extends keyof TBase
        ? ResolveKeys<TBase[K], TInput[K]>
        : never
} 

export type ResolveExcludedKeys<TBase extends FundType.Plain, TInput> = {
    [K in Exclude<keyof TBase, keyof TInput>]?: never
};

export type ResolveKeysBatch<TBase, TInputs extends readonly unknown[]> = {
    [I in keyof TInputs]: ResolveKeys<TBase, TInputs[I]>;
};