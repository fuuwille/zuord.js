import type { $Produce } from "../../internal";
import type { ProduceModeX } from "../produceMode";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, _TMode extends Partial<ProduceModeX.Omit.Loose> = {}> 
    = $Produce.Omit.Plain<TSource, TPattern>;