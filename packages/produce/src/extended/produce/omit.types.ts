import type { $Produce } from "../../internal";
import type { ProduceModeX } from "../produceMode";
import type { FundType } from "@zuord/type";
import type { TypeUtil } from "@zuord/util";

export type Loose<TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>, _TMode extends Partial<ProduceModeX.Omit.Loose> = {}> 
    = $Produce.Omit.Plain<TSource, TPattern>;