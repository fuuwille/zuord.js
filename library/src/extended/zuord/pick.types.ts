import type { $Zuord } from "../../internal";
import type { ZuordModeX } from "../mode";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, _TMode extends Partial<ZuordModeX.Pick.Loose> = {}> 
    = $Zuord.Pick.Plain<TSource, TPattern>;