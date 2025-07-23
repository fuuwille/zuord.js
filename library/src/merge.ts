import { internalZuord as internal } from "./internal";
import { ZuordType } from "@zuord/type";
import { ZuordCore, zuordCore } from "@zuord/core";
import { MergeMode, Merge } from "./merge.types";

export function merge <TContent extends ZuordType.Plain[]> (content: [...TContent]) 
    : Merge<TContent>;

export function merge <TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> (content: [...TContent], mode: TMode)
    : Merge<TContent, ZuordCore.ModeResolve<[typeof mergeMode, TMode]>>;

export function merge <TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = zuordCore.modeResolve([mergeMode, mode ?? {}]);

    return internal.merge(content, resolvedMode) as Merge<TContent, TMode>;
}

export const mergeMode = internal.mergeMode satisfies MergeMode;