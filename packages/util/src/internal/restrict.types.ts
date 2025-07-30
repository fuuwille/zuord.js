import { ZuordType as Type } from "@zuord/type";

export namespace Restrict {
  export type Keys<TBase, TInput> = [TBase, TInput] extends [infer TBase extends Type.Plain, infer TInput extends Type.Plain] ? (
    KeysIncluded<TBase, TInput> & KeysExcluded<TBase, TInput>
  ) : TInput;

  export type KeysIncluded<TBase extends Type.Plain, TInput extends Type.Plain> = {
    [K in keyof TInput]: K extends keyof TBase
        ? Keys<TBase[K], TInput[K]>
        : never
  } 

  export type KeysExcluded<TBase extends Type.Plain, TInput extends Type.Plain> = {
    [K in Exclude<keyof TBase, keyof TInput>]?: never
  };
}