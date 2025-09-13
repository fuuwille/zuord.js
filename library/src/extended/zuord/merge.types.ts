import type { $Zuord } from "../../internal";
import type { zuordModeX, ZuordModeX } from "../mode";
import type { ZuordType, ZuordPlain } from "@zuord/type";
import { ZuordCore } from "@zuord/core";

export type Loose<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Loose> = {}> 
    = $Zuord.Merge.Plain<TContent, ZuordCore.ModeResolve<[typeof zuordModeX.merge.loose, TMode]>>;

export type Array<TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array> = {}> 
    = $Zuord.Merge.Array<TContent, ZuordCore.ModeResolve<[typeof zuordModeX.merge.array, TMode]>>;