import { $Zuord } from "zuord/internal";
import { ZuordModeX } from "zuord/extended";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export namespace Plain {
    export type Restrict<TBase extends Type.Plain, TContent extends Util.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
        = $Zuord.Evolve.ResolvePlain<TBase, TContent, TMode>;
}