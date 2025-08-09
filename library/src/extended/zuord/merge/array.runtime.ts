import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordType as type } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";

const $ = ($content: Type.Array<Type.Array>, $mode: Partial<ZuordModeX.Merge.Array>) => {
    if(!type.array($content, { item: type.array })) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.merge.array($content, core.mode.resolve([zuordModeX.merge.array, $mode]));
}


// LOOSE

export function loose <TContent extends Type.Array<Type.Array>> (content: [...TContent])
    : ZuordX.Merge.Array.Loose<TContent>;

export function loose <TContent extends Type.Array<Type.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Array.Loose<TContent, TMode>;

export function loose <TContent extends Type.Array<Type.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Array.Loose<TContent, TMode> { return $(content, mode); }