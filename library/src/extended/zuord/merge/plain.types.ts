import { $Zuord } from "zuord/internal";
import { ZuordModeX } from "zuord/extended";
import { ZuordPlain } from "@zuord/type";

export namespace Plain {
    export type Loose<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
        = $Zuord.Merge.Plain<TContent, TMode>;
}