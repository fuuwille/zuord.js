import { $Zuord } from "../../../internal";
import { ZuordModeX } from "../../";
import { ZuordType as Type } from "@zuord/type";

export type Loose<TContent extends Type.Array<Type.Array>, TMode extends Partial<ZuordModeX.Merge.Array> = {}> 
    = $Zuord.Merge.Array<TContent, TMode>;