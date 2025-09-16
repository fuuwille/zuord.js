import { produceMode } from "./produceMode";
import { $produce } from "../internal";
import { zuordCore } from "@zuord/core";
import type { Produce, ProduceMode } from ".";
import type { PlainType, FundType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export function integrate <TSource extends FundType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : Produce.Integrate<TSource, TPatch>;

export function integrate <TSource extends FundType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceMode.Integrate>> (source: TSource, patch: TPatch, mode: TMode)
    : Produce.Integrate<TSource, TPatch, TMode>;

export function integrate <TSource extends FundType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ProduceMode.Merge>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : Produce.Integrate<TSource, TPatch> { return $produce.integrate.plain(source, patch, zuordCore.modeResolve([produceMode.integrate, mode])) as Produce.Integrate<TSource, TPatch, TMode>; }

export function merge <TContents extends PlainType.Array> (contents: [...TContents])
    : Produce.Merge<TContents>;

export function merge <TContents extends PlainType.Array, TMode extends Partial<ProduceMode.Merge>> (contents: [...TContents], mode: TMode)
    : Produce.Merge<TContents, TMode>;

export function merge <TContents extends PlainType.Array, TMode extends Partial<ProduceMode.Merge>> (contents: [...TContents], mode: TMode = {} as TMode)
    : Produce.Merge<TContents, TMode> { return $produce.merge.plain(contents, zuordCore.modeResolve([produceMode.merge, mode])); }

export function evolve <TSource extends FundType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : Produce.Evolve<TSource, TPatches>;

export function evolve <TSource extends FundType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceMode.Evolve>> (source: TSource, patches: [...TPatches], mode: TMode)
    : Produce.Evolve<TSource, TPatches, TMode>;

export function evolve <TSource extends FundType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ProduceMode.Evolve>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : Produce.Evolve<TSource, TPatches, TMode> { return $produce.evolve.plain(source, patches, zuordCore.modeResolve([produceMode.evolve, mode])); }

export function pick <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : Produce.Pick<TSource, TPattern>;

export function pick <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Pick>> (source: TSource, pattern: TPattern, mode: TMode)
    : Produce.Pick<TSource, TPattern, TMode>;

export function pick <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Pick>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : Produce.Pick<TSource, TPattern, TMode> { return $produce.pick.plain(source, pattern, zuordCore.modeResolve([produceMode.pick, mode])); }

export function omit <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : Produce.Omit<TSource, TPattern>;

export function omit <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Omit>> (source: TSource, pattern: TPattern, mode: TMode)
    : Produce.Omit<TSource, TPattern, TMode>;

export function omit <TSource extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceMode.Omit>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : Produce.Omit<TSource, TPattern, TMode> { return $produce.omit.plain(source, pattern, zuordCore.modeResolve([produceMode.omit, mode])); }