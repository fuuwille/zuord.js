import { $produce } from "../../internal";
import { produceModeX } from "../produceMode";
import { zuord } from "zuord";
import type { ProduceX, ProduceModeX } from "../..";
import type { FundType } from "@zuord/type";
import type { TypeUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ProduceX.Pick.Loose<TSource, TPattern>;

export function loose <TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceModeX.Pick.Loose>> (source: TSource, pattern: TPattern, mode: TMode)
    : ProduceX.Pick.Loose<TSource, TPattern, TMode>;

export function loose <TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceModeX.Pick.Loose>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ProduceX.Pick.Loose<TSource, TPattern, TMode> { return $produce.pick.plain(source, pattern, zuord.modeResolve([produceModeX.pick.loose, mode])); }