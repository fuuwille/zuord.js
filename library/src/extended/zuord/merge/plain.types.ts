import { $Zuord } from "zuord/internal";
import { ZuordModeX } from "zuord/extended";
import { ZuordType as Type } from "@zuord/type";

export namespace Plain {
    export type Loose<TContent extends Type.PlainArray, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
        = $Zuord.Merge.ResolveUnifiedPlain<TContent, TMode>;
}