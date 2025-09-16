import type { $Produce } from "../../internal";
import type { ProduceModeX } from "..";
import type { FundType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";

export type Restrict<TSource extends Type.Plain, TPatches extends Util.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceModeX.Evolve.Restrict> = {}> 
    = $Produce.Evolve.Plain<TSource, TPatches, TMode>;