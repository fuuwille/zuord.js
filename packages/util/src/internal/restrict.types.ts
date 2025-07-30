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

    export type ListKeys<TBase, TInputs> = TInputs extends Type.TupleOf<infer T> ? (
        ListKeysFromTuple<TBase, T>
    ) : TInputs extends Type.ArrayOf<infer U> ? (
        ListKeysFromArray<TBase, Type.UnionToTuple<U>>[number][]
    ) : never;

    export type ListKeysFromTuple<TBase, TInputs> = TInputs extends [infer TFirst, ...infer TRest]
        ? [Keys<TBase, TFirst>, ...ListKeysFromTuple<TBase, TRest>]
        : TInputs;

    export type ListKeysFromArray<TBase, TInputs extends readonly unknown[]> = {
        [K in keyof TInputs]: Keys<TBase, TInputs[K]>
    } extends infer T extends Type.Array ? T : never;
}