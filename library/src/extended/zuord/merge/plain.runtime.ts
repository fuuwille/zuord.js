import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordPlain } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordPlain } from "@zuord/type";

const $ = ($content: ZuordPlain.Array, $mode: Partial<ZuordModeX.Merge.Plain>) => {
    if(!zuordPlain.array($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.merge.plain($content, core.mode.resolve([zuordModeX.merge.plain, $mode]));
}


// LOOSE

export function loose <TContent extends ZuordPlain.Array> (content: [...TContent])
    : ZuordX.Merge.Plain.Loose<TContent>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Plain.Loose<TContent, TMode>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Plain.Loose<TContent, TMode> { return $(content, mode); }