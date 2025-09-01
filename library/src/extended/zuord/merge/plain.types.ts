import type { $Zuord } from "../../../internal";
import type { ZuordModeX } from "../../";
import type { ZuordPlain } from "@zuord/type";

export type Loose<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
    = $Zuord.Merge.Plain<TContent, TMode>;