import type { $ZuordUtil } from "../../internal";
import type { FundType } from "@zuord/type";

export type Keys<T extends FundType.Tuple> = $ZuordUtil.Tuple.Keys<T>;

export type Unify<T extends FundType.Tuple> = $ZuordUtil.Tuple.Unify<T>;