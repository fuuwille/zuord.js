import type { $Zuord } from "../../internal";
import type { produceModeX, ProduceModeX } from "../produceMode";
import type { ZuordType, ZuordPlain } from "@zuord/type";
import { ZuordCore } from "@zuord/core";

export type Loose<TContents extends ZuordPlain.Array, TMode extends Partial<ProduceModeX.Merge.Loose> = {}> 
    = $Zuord.Merge.Plain<TContents, ZuordCore.ModeResolve<[typeof produceModeX.merge.loose, TMode]>>;

export type Array<TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ProduceModeX.Merge.Array> = {}> 
    = $Zuord.Merge.Array<TContents, ZuordCore.ModeResolve<[typeof produceModeX.merge.array, TMode]>>;