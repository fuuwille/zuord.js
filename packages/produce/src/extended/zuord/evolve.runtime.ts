import { $zuord } from "../../internal";
import { zuordXMode } from "../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../..";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : ZuordX.Evolve.Restrict<TSource, TPatches>;

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Restrict>> (source: TSource, patches: [...TPatches], mode: TMode)
    : ZuordX.Evolve.Restrict<TSource, TPatches, TMode>;

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Restrict>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Restrict<TSource, TPatches, TMode> { return $zuord.evolve.plain(source, patches, zuordCore.modeResolve([zuordXMode.evolve.restrict, mode])); }