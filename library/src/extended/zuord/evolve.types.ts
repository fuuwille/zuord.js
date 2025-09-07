import type { $Zuord } from "../../internal";
import type { ZuordModeX } from "../";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";

export type Restrict<TSource extends Type.Plain, TPatches extends Util.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
    = $Zuord.Evolve.Plain<TSource, TPatches, TMode>;

export type Strict<TSource extends Type.Plain, TPatches extends Util.Strict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
    = $Zuord.Evolve.Plain<TSource, TPatches, TMode>;