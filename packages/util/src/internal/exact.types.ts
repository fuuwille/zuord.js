import { ZuordType } from "@zuord/type";


export type ExactKeys<TBase, TInput> = 
    TBase extends ZuordType.Plain
        ? ({
            [K in keyof TInput]: K extends keyof TBase
                ? ExactKeys<TBase[K], TInput[K]>
                : never
        } & {
            [K in Exclude<keyof TBase, keyof TInput>]?: never
        }) extends infer TT ? {
            [K in keyof TT as [undefined] extends [TT[K]] ? never : K]: TT[K] extends never ? never : TT[K];
        } : never
        : TInput;

export type ExactKeysArray<TBase, TInputs> = TInputs extends ZuordType.TupleOf<infer T> ? (
  ExactKeysArray2<TBase, T>
) : TInputs extends ZuordType.ArrayOf<infer U> ? (
    ExactKeysArray1<TBase, ZuordType.UnionToTuple<U>>[number][]
) : never;

export type ExactKeysArray1<TBase, TInputs extends readonly unknown[]> = {
  [K in keyof TInputs]: ExactKeys<TBase, TInputs[K]>
} extends infer T extends ZuordType.Array ? T : never;

export type ExactKeysArray2<TBase, TInputs> = TInputs extends [infer TFirst, ...infer TRest]
? [ExactKeys<TBase, TFirst>, ...ExactKeysArray2<TBase, TRest>]
: TInputs;
  
export type ExactShape<TBase, TInput> = 
  TBase extends ZuordType.Plain ? (
    // 1. TInput'ta olmayan ama TBase'te olanlar => eksik key
    { [K in Exclude<keyof TBase, keyof TInput>]: never } &

    // 2. TInput'ta olan ama TBase'te olmayanlar => fazla key
    { [K in Exclude<keyof TInput, keyof TBase>]: never } &

    // 3. Ortak key'ler için recursive kontrol
    { [K in keyof TInput & keyof TBase]: 
        [TInput[K]] extends [true] ? true : ExactShape<TBase[K], TInput[K]>
    }
  ) : TInput;