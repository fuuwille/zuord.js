import { produceMode } from "./produceMode";
import { $produce } from "../internal";
import { zuord } from "zuord";
import type { Produce, ProduceMode } from ".";
import type { PlainType, FundType } from "@zuord/type";
import type { TypeUtil } from "@zuord/util";

/**
 * Produces a new object with the given patch integrated into the source 
 */
export function integrate <TSource extends FundType.Plain, TPatch extends TypeUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceMode.Merge>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : Produce.Integrate<TSource, TPatch> { return $produce.integrate.plain(source, patch, zuord.modeResolve([produceMode.integrate, mode])) as Produce.Integrate<TSource, TPatch, TMode>; }

export function merge <TContents extends PlainType.Array, TMode extends Partial<ProduceMode.Merge>> (contents: [...TContents], mode: TMode = {} as TMode)
    : Produce.Merge<TContents, TMode> { return $produce.merge.plain(contents, zuord.modeResolve([produceMode.merge, mode])); }

export function evolve <TSource extends FundType.Plain, TPatches extends TypeUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceMode.Evolve>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : Produce.Evolve<TSource, TPatches, TMode> { return $produce.evolve.plain(source, patches, zuord.modeResolve([produceMode.evolve, mode])); }

export function pick <TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Pick>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : Produce.Pick<TSource, TPattern, TMode> { return $produce.pick.plain(source, pattern, zuord.modeResolve([produceMode.pick, mode])); }

export function omit <TSource extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Omit>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : Produce.Omit<TSource, TPattern, TMode> { return $produce.omit.plain(source, pattern, zuord.modeResolve([produceMode.omit, mode])); }