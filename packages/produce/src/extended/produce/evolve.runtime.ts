import { $produce } from "../../internal";
import { produceModeX } from "../produceMode";
import { zuordCore } from "@zuord/core";
import type { ProduceX, ProduceModeX } from "../..";
import type { FundType } from "@zuord/type";
import type { TypeUtil } from "@zuord/util";


// LOOSE

export function restrict <TSource extends FundType.Plain, TPatches extends TypeUtil.Restrict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : ProduceX.Evolve.Restrict<TSource, TPatches>;

export function restrict <TSource extends FundType.Plain, TPatches extends TypeUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceModeX.Evolve.Restrict>> (source: TSource, patches: [...TPatches], mode: TMode)
    : ProduceX.Evolve.Restrict<TSource, TPatches, TMode>;

export function restrict <TSource extends FundType.Plain, TPatches extends TypeUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceModeX.Evolve.Restrict>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : ProduceX.Evolve.Restrict<TSource, TPatches, TMode> { return $produce.evolve.plain(source, patches, zuordCore.modeResolve([produceModeX.evolve.restrict, mode])); }