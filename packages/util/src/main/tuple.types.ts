import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";

export type Keys<T extends FundType.Tuple> = $TypeUtil.Tuple.Keys<T>;

export type Unify<T extends FundType.Tuple> = $TypeUtil.Tuple.Unify<T>;