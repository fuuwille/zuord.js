import type { $TypeUtil } from "../internal";
import type { FundType, PlainType } from "@zuord/type";

export type Keys<TBase extends FundType.Plain, TContent extends FundType.Plain> 
    = $TypeUtil.Strict.ResolveKeys<TBase, TContent>;

export type KeysBatch<TBase extends FundType.Plain, TContents extends PlainType.Array> 
    = $TypeUtil.Strict.ResolveKeysBatch<TBase, TContents> extends infer T extends PlainType.Array ? T : never