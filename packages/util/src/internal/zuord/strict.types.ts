import { ZuordType as Type } from "@zuord/type";

export namespace Strict {
  export type Keys<TBase, TInput> =  TBase extends Type.Plain ? (
    { [K in Exclude<keyof TBase, keyof TInput>]: never } &
    { [K in Exclude<keyof TInput, keyof TBase>]: never } &
    { [K in keyof TInput & keyof TBase]: 
        [TInput[K]] extends [true] ? true : Keys<TBase[K], TInput[K]>
    }
  ) : TInput;
}