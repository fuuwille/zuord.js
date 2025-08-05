import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordType as type } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";


//

const $ = ($base: Type.Plain, $content: Type.PlainArray, $mode: Partial<ZuordModeX.Evolve.Plain>) => {
    if(!type.plainArray($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.evolve.plain($base, $content, core.mode.resolve([zuordModeX.evolve.plain, $mode]));
}


// LOOSE

export function restrict <TBase extends Type.Plain, TContent extends Util.Restrict.ListKeys<TBase, TContent>> (base: TBase, content: [...TContent])
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent>;

export function restrict <TBase extends Type.Plain, TContent extends Util.Restrict.ListKeys<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode)
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent, TMode>;

export function restrict <TBase extends Type.Plain, TContent extends Util.Restrict.ListKeys<TBase, TContent>, TMode extends Partial<ZuordModeX.Evolve.Plain>> (base: TBase, content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Evolve.Plain.Restrict<TBase, TContent, TMode> { return $(base, content, mode); }