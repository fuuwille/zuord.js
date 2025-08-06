import { $Zuord } from "zuord/internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordModeX } from "zuord/extended";

export namespace Array {
    export type Loose<TContent extends Type.ArrayOf<Type.Array>, TMode extends Partial<ZuordModeX.Merge.Array> = {}> 
        = $Zuord.Merge.ResolvePlain<TContent, TMode>;
}