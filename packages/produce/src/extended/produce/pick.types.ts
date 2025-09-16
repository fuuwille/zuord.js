import type { $Produce } from "../../internal";
import type { ProduceModeX } from "../produceMode";
import type { FundType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, _TMode extends Partial<ProduceModeX.Pick.Loose> = {}> 
    = $Produce.Pick.Plain<TSource, TPattern>;