import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordPlain } from "@zuord/type";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType, ZuordPlain } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $plain = ($source: ZuordType.Plain, $patches: ZuordPlain.Array, $mode: Partial<ZuordModeX.Evolve.Plain>) => {
    if(!zuordPlain.array($patches)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.evolve.plain($source, $patches, zuordCore.mode.resolve([zuordModeX.evolve.plain, $mode]));
}


// LOOSE

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : ZuordX.Evolve.Restrict<TSource, TPatches>;

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (source: TSource, patches: [...TPatches], mode: TMode)
    : ZuordX.Evolve.Restrict<TSource, TPatches, TMode>;

export function restrict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Restrict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Restrict<TSource, TPatches, TMode> { return $plain(source, patches, mode); }


// STRICT

export function strict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Strict.KeysBatch<TSource, TPatches>> (source: TSource, patches: [...TPatches])
    : ZuordX.Evolve.Strict<TSource, TPatches>;

export function strict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Strict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (source: TSource, patches: [...TPatches], mode: TMode)
    : ZuordX.Evolve.Strict<TSource, TPatches, TMode>;

export function strict <TSource extends ZuordType.Plain, TPatches extends ZuordUtil.Strict.KeysBatch<TSource, TPatches>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (source: TSource, patches: [...TPatches], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Strict<TSource, TPatches, TMode> { return $plain(source, patches, mode); }