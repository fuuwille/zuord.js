import type { $Zuord } from "../../internal";
import type { ZuordModeX } from "../";
import type { ZuordType, ZuordPlain } from "@zuord/type";

export type Loose<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain> = {}> 
    = $Zuord.Merge.Plain<TContent, TMode>;

export type Array<TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array> = {}> 
    = $Zuord.Merge.Array<TContent, TMode>;