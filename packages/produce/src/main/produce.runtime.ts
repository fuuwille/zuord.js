import { zuordMode } from "./mode";
import { $zuord } from "../internal";
import { zuordCore } from "@zuord/core";
import type { ZuordProduce, ZuordMode } from ".";
import type { ZuordPlain, ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : ZuordProduce.Integrate<TSource, TPatch>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Integrate>> (source: TSource, patch: TPatch, mode: TMode)
    : ZuordProduce.Integrate<TSource, TPatch, TMode>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Merge>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : ZuordProduce.Integrate<TSource, TPatch> { return $zuord.integrate.plain(source, patch, zuordCore.modeResolve([zuordMode.integrate, mode])) as ZuordProduce.Integrate<TSource, TPatch, TMode>; }

export function merge <TContents extends ZuordPlain.Array> (contents: [...TContents])
    : ZuordProduce.Merge<TContents>;

export function merge <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordMode.Merge>> (contents: [...TContents], mode: TMode)
    : ZuordProduce.Merge<TContents, TMode>;

export function merge <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordMode.Merge>> (contents: [...TContents], mode: TMode = {} as TMode)
    : ZuordProduce.Merge<TContents, TMode> { return $zuord.merge.plain(contents, zuordCore.modeResolve([zuordMode.merge, mode])); }

export function evolve <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : ZuordProduce.Evolve<TSource, TPatches>;

export function evolve <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordMode.Evolve>> (source: TSource, patches: [...TPatches], mode: TMode)
    : ZuordProduce.Evolve<TSource, TPatches, TMode>;

export function evolve <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordMode.Evolve>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : ZuordProduce.Evolve<TSource, TPatches, TMode> { return $zuord.evolve.plain(source, patches, zuordCore.modeResolve([zuordMode.evolve, mode])); }

export function pick <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ZuordProduce.Pick<TSource, TPattern>;

export function pick <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordMode.Pick>> (source: TSource, pattern: TPattern, mode: TMode)
    : ZuordProduce.Pick<TSource, TPattern, TMode>;

export function pick <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordMode.Pick>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordProduce.Pick<TSource, TPattern, TMode> { return $zuord.pick.plain(source, pattern, zuordCore.modeResolve([zuordMode.pick, mode])); }

export function omit <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ZuordProduce.Omit<TSource, TPattern>;

export function omit <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordMode.Omit>> (source: TSource, pattern: TPattern, mode: TMode)
    : ZuordProduce.Omit<TSource, TPattern, TMode>;

export function omit <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordMode.Omit>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordProduce.Omit<TSource, TPattern, TMode> { return $zuord.omit.plain(source, pattern, zuordCore.modeResolve([zuordMode.omit, mode])); }