import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordType as type } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";

const $ = ($content: Type.PlainArray, $mode: Partial<ZuordModeX.Merge.Plain>) => {
    if(!type.plainArray($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.merge.plain($content, core.mode.resolve([zuordModeX.merge.plain, $mode]));
}


// LOOSE

export function loose <TContent extends Type.PlainArray> (content: [...TContent])
    : ZuordX.Merge.Plain.Loose<TContent>;

export function loose <TContent extends Type.PlainArray, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Plain.Loose<TContent, TMode>;

export function loose <TContent extends Type.PlainArray, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Plain.Loose<TContent, TMode> { return $(content, mode); }