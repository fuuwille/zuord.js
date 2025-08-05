import { ZuordType as Type } from "@zuord/type";

export namespace Restrict {
    export type Keys<TBase, TInput> = TBase extends Type.Plain ? (
        (KeysIncluded<TBase, TInput> & KeysExcluded<TBase, TInput>) extends infer T ? {
            [K in keyof T as [undefined] extends [T[K]] ? never : K]: T[K] extends never ? never : T[K];
        } : never
    ) : TInput;

    export type KeysIncluded<TBase extends Type.Plain, TInput> = {
        [K in keyof TInput]: K extends keyof TBase
            ? Keys<TBase[K], TInput[K]>
            : never
    } 

    export type KeysExcluded<TBase extends Type.Plain, TInput> = {
        [K in Exclude<keyof TBase, keyof TInput>]?: never
    };

    export type ListKeys<TBase, TInputs extends readonly unknown[]> = {
        [I in keyof TInputs]: Keys<TBase, TInputs[I]>;
    };
}