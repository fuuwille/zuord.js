import { $Zuord } from "zuord/internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordModeX } from "zuord/extended";

export namespace Plain {
    export type Loose<TContent extends Type.PlainArray, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
        = $Zuord.Merge.Object<TContent, TMode>;
}