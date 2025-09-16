import { $produce } from "../../internal";
import { produceModeX } from "../produceMode";
import { zuordCore } from "@zuord/core";
import type { ProduceX, ProduceModeX } from "../..";
import type { FundType } from "@zuord/type";
import type { TypeUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends FundType.Plain, TContent extends FundType.Plain> (source: TSource, content: TContent)
    : ProduceX.Integrate.Loose<TSource, TContent>;

export function loose <TSource extends FundType.Plain, TContent extends FundType.Plain, TMode extends Partial<ProduceModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode)
    : ProduceX.Integrate.Loose<TSource, TContent, TMode>;

export function loose <TSource extends FundType.Plain, TContent extends FundType.Plain, TMode extends Partial<ProduceModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode = {} as TMode)
    : ProduceX.Integrate.Loose<TSource, TContent, TMode> { return $produce.integrate.plain(source, content, zuordCore.modeResolve([produceModeX.integrate.loose, mode])) as ProduceX.Integrate.Loose<TSource, TContent, TMode>; }


// RESTRICT

export function restrict <TSource extends FundType.Plain, TPatch extends TypeUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : ProduceX.Integrate.Restrict<TSource, TPatch>;

export function restrict <TSource extends FundType.Plain, TPatch extends TypeUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode)
    : ProduceX.Integrate.Restrict<TSource, TPatch, TMode>;

export function restrict <TSource extends FundType.Plain, TPatch extends TypeUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : ProduceX.Integrate.Restrict<TSource, TPatch, TMode> { return $produce.integrate.plain(source, patch, zuordCore.modeResolve([produceModeX.integrate.restrict, mode])) as ProduceX.Integrate.Restrict<TSource, TPatch, TMode>; }


// ARRAY

export function array <TSource extends FundType.Array, TContent extends FundType.Array> (source: [...TSource], content: [...TContent])
    : ProduceX.Integrate.Array<TSource, TContent>;

export function array <TSource extends FundType.Array, TContent extends FundType.Array, TMode extends Partial<ProduceModeX.Integrate.Array>> (source: [...TSource], content: [...TContent], mode : TMode)
    : ProduceX.Integrate.Array<TSource, TContent, TMode>;

export function array <TSource extends FundType.Array, TContent extends FundType.Array, TMode extends Partial<ProduceModeX.Integrate.Array>> (source: [...TSource], content: [...TContent], mode : TMode = {} as TMode)
    : ProduceX.Integrate.Array<TSource, TContent, TMode> { return $produce.integrate.array(source, content, zuordCore.modeResolve([produceModeX.integrate.array, mode])) as ProduceX.Integrate.Array<TSource, TContent, TMode>; }