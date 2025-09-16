import type { $ZuordUtil } from "../../internal";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export type Required<T extends FundType.Plain, TMode extends ZuordCore.ModeRecord> = $ZuordUtil.Only.ResolveRequired<T, TMode>;