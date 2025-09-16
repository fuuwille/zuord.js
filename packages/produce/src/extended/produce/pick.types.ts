import type { $Zuord } from "../../internal";
import type { ZuordXMode } from "../produceMode";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, _TMode extends Partial<ZuordXMode.Pick.Loose> = {}> 
    = $Zuord.Pick.Plain<TSource, TPattern>;