import { ZuordType as Type } from "@zuord/type";

export namespace Strict {
  export type Keys<TBase, TInput> =  TBase extends Type.Plain ? (
    { [K in Exclude<keyof TBase, keyof TInput>]: never } &
    { [K in Exclude<keyof TInput, keyof TBase>]: never } &
    { [K in keyof TInput & keyof TBase]: Keys<TBase[K], TInput[K]>
    }
  ) : TInput;

  export type ResolveExcludedKeys<TBase, TInput> = (
    ResolveExcludedBaseKeys<TBase, TInput> & ResolveExcludedInputKeys<TBase, TInput>
  )

  export type ResolveExcludedBaseKeys<TBase, TInput> = { 
    [K in Exclude<keyof TBase, keyof TInput>]: never
  };

  export type ResolveExcludedInputKeys<TBase, TInput> = { 
    [K in Exclude<keyof TInput, keyof TBase>]: never
  };

  export type ResolveIncludedKeys<TBase, TInput> = { 
    [K in keyof TInput & keyof TBase]: Keys<TBase[K], TInput[K]>
  }
}