import type { $Zuord } from "../../internal";
import type { zuordXMode, ZuordXMode } from "../mode";
import type { ZuordType, ZuordPlain } from "@zuord/type";
import { ZuordCore } from "@zuord/core";

export type Loose<TContents extends ZuordPlain.Array, TMode extends Partial<ZuordXMode.Merge.Loose> = {}> 
    = $Zuord.Merge.Plain<TContents, ZuordCore.ModeResolve<[typeof zuordXMode.merge.loose, TMode]>>;

export type Array<TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordXMode.Merge.Array> = {}> 
    = $Zuord.Merge.Array<TContents, ZuordCore.ModeResolve<[typeof zuordXMode.merge.array, TMode]>>;