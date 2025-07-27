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

export type ExactShape<TBase, TInput> = {
  [K in keyof TBase]: 
    K extends keyof TInput
      ? [TInput[K]] extends [true]
        ? true
        : ExactKeys<TBase[K], TInput[K]>
      : never; // eksik key yakalanır
};