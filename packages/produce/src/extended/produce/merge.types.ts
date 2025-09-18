import type { $Produce } from "../../internal";
import type { produceModeX, ProduceModeX } from "../produceMode";
import type { FundType, PlainType } from "@zuord/type";
import { Zuord } from "zuord";

export type Loose<TContents extends PlainType.Array, TMode extends Partial<ProduceModeX.Merge.Loose> = {}> 
    = $Produce.Merge.Plain<TContents, Zuord.ModeResolve<[typeof produceModeX.merge.loose, TMode]>>;

export type Array<TContents extends FundType.Array<FundType.Array>, TMode extends Partial<ProduceModeX.Merge.Array> = {}> 
    = $Produce.Merge.Array<TContents, Zuord.ModeResolve<[typeof produceModeX.merge.array, TMode]>>;