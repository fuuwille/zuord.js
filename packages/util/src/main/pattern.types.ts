import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";

export type Plain<T extends FundType.Plain> = $TypeUtil.Pattern.PlainResolve<T>;