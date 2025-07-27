import { ZuordType } from "@zuord/type";

export type ExactKeys<TBase, TInput> = TBase extends ZuordType.Plain ? (
    ExactSharedKeys<TBase, TInput> & ExactNoExtraKeys<TBase, TInput>
) : never;

export type ExactSharedKeys<TBase, TInput> = {
    [K in Exclude<keyof TInput, Exclude<keyof TInput, keyof TBase>>]: (
        [TInput[K]] extends [true] ? true : (
            K extends keyof TBase ? ExactKeys<TBase[K], TInput[K]> : never
        )
    )
};

export type ExactNoExtraKeys<TBase, TInput> = {
    [K in Exclude<keyof TInput, keyof TBase>]: never;
}

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

type Base = {
  a: number;
  b: { x: boolean };
};

type InputValid = {
  a: 42;          // 42 extends number, OK
  b: { x: true }; // true extends boolean, OK
};

type InputInvalid = {
  a: "string";    // string extends number? NO => never
  b: { x: true };
};

type TestValid = ExactShape<Base, InputValid>;   // türü başarılı
type TestInvalid = ExactShape<Base, InputInvalid>; // 'a' key için never
