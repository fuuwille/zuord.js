import type { FundType } from "@zuord/type";

export type ResolveKeys<TBase, TInput> = TBase extends FundType.Plain ? (
  ResolveIncludedKeys<TBase, TInput> & ResolveExcludedKeys<TBase, TInput>
) : TInput;

export type ResolveIncludedKeys<TBase, TInput> = { 
  [K in keyof TInput & keyof TBase]: ResolveKeys<TBase[K], TInput[K]>
}

export type ResolveExcludedKeys<TBase, TInput> = (
  ResolveExcludedBaseKeys<TBase, TInput> & ResolveExcludedInputKeys<TBase, TInput>
)

export type ResolveExcludedBaseKeys<TBase, TInput> = { 
  [K in Exclude<keyof TBase, keyof TInput>]: never
};

export type ResolveExcludedInputKeys<TBase, TInput> = { 
  [K in Exclude<keyof TInput, keyof TBase>]: never
};

export type ResolveKeysBatch<TBase, TInputs extends readonly unknown[]> = {
  [I in keyof TInputs]: ResolveKeys<TBase, TInputs[I]>;
};