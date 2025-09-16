import type { $Produce } from "../../internal";
import type { produceModeX, ProduceModeX } from "../..";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends FundType.Plain, TContent extends FundType.Plain, TMode extends Partial<ProduceModeX.Integrate.Loose> = {}> 
    = $Produce.Integrate.Plain<TSource, TContent, ZuordCore.ModeResolve<[typeof produceModeX.integrate.loose, TMode]>>;

export type Restrict<TSource extends FundType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceModeX.Integrate.Restrict> = {}> 
    = $Produce.Integrate.Plain<TSource, TPatch, ZuordCore.ModeResolve<[typeof produceModeX.integrate.restrict, TMode]>>;

export type Array<TSource extends FundType.Array, TContent extends FundType.Array, TMode extends Partial<ProduceModeX.Integrate.Array> = {}> 
    = $Produce.Integrate.Array<TSource, TContent, ZuordCore.ModeResolve<[typeof produceModeX.integrate.array, TMode]>>;