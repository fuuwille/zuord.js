import { $Zuord } from "../../../internal";
import { ZuordModeX } from "../../";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export namespace Plain {
    export type Restrict<TBase extends Type.Plain, TContent extends Util.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
        = $Zuord.Evolve.Plain<TBase, TContent, TMode>;

    export type Strict<TBase extends Type.Plain, TContent extends Util.Strict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain> = {}> 
        = $Zuord.Evolve.Plain<TBase, TContent, TMode>;
}