import { $Zuord } from "zuord/internal";
import { ZuordModeX } from "zuord/extended";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";

export namespace Plain {
    export type Loose<TContent extends Type.PlainArray, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
        = Util.Unify.Hybrid<$Zuord.Merge.ResolvePlain<TContent, TMode>, Core.Mode.Resolve<[{ onePlain: false }, TMode]>>;
}