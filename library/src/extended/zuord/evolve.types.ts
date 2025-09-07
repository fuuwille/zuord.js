import type { $Zuord } from "../../internal";
import type { ZuordModeX } from "../";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";

export type Restrict<TBase extends Type.Plain, TContent extends Util.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
    = $Zuord.Evolve.Plain<TBase, TContent, TMode>;

export type Strict<TBase extends Type.Plain, TContent extends Util.Strict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
    = $Zuord.Evolve.Plain<TBase, TContent, TMode>;