import type { $ZuordUtil } from "../../internal";
import type { FundType } from "@zuord/type";

export type Plain<T extends FundType.Plain> = $ZuordUtil.Pattern.PlainResolve<T>;