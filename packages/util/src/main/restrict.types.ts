import type { $ZuordUtil } from "../internal";
import type { FundType, PlainType } from "@zuord/type";

export type Keys<TBase extends FundType.Plain, TInput extends FundType.Plain> 
    = $ZuordUtil.Restrict.ResolveKeys<TBase, TInput>

export type KeysBatch<TBase extends FundType.Plain, TInputs extends PlainType.Array> 
    = $ZuordUtil.Restrict.ResolveKeysBatch<TBase, TInputs> extends infer T extends PlainType.Array ? T : never