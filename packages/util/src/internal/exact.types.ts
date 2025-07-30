import { ZuordType } from "@zuord/type";

export namespace Exact {
  export type Keys<TBase, TInput> =  TBase extends ZuordType.Plain ? (
    { [K in Exclude<keyof TBase, keyof TInput>]: never } &
    { [K in Exclude<keyof TInput, keyof TBase>]: never } &
    { [K in keyof TInput & keyof TBase]: 
        [TInput[K]] extends [true] ? true : Keys<TBase[K], TInput[K]>
    }
  ) : TInput;
}

