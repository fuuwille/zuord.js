import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordPlain } from "@zuord/type";
import { zuordCore } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType, ZuordPlain } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $ = ($base: ZuordType.Plain, $content: ZuordPlain.Array, $mode: Partial<ZuordModeX.Evolve.Plain>) => {
    if(!zuordPlain.array($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.evolve.plain($base, $content, zuordCore.mode.resolve([zuordModeX.evolve.plain, $mode]));
}


// LOOSE

export function restrict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>> (base: TBase, content: [...TContent])
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent>;

export function restrict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode)
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent, TMode>;

export function restrict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent, TMode> { return $(base, content, mode); }


// STRICT

export function strict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Strict.KeysBatch<TBase, TContent>> (base: TBase, content: [...TContent])
    : ZuordX.Evolve.Plain.Strict<TBase, TContent>;

export function strict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Strict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode)
    : ZuordX.Evolve.Plain.Strict<TBase, TContent, TMode>;

export function strict <TBase extends ZuordType.Plain, TContent extends ZuordUtil.Strict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Plain.Strict<TBase, TContent, TMode> { return $(base, content, mode); }