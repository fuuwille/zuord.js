import { $Zuord } from "zuord/internal";
import { ZuordModeX } from "zuord/extended";
import { ZuordType as Type } from "@zuord/type";

export namespace Array {
    export type Loose<TContent extends Type.Array<Type.Array>, TMode extends Partial<ZuordModeX.Merge.Array> = {}> 
        = $Zuord.Merge.Array<TContent, TMode>;
}