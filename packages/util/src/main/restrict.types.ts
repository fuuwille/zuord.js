import type { $TypeUtil } from "../internal";
import type { FundType, PlainType } from "@zuord/type";

export type Keys<TBase extends FundType.Plain, TInput extends FundType.Plain> 
    = $TypeUtil.Restrict.ResolveKeys<TBase, TInput>

export type KeysBatch<TBase extends FundType.Plain, TInputs extends PlainType.Array> 
    = $TypeUtil.Restrict.ResolveKeysBatch<TBase, TInputs> extends infer T extends PlainType.Array ? T : never