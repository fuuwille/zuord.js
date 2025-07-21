import { Zuord, zuord } from "zuord";
import { internalZuord as internal } from "./internal";
import { ZuordCore, zuordCore } from "@zuord/core";

export function merge <TContent extends object[], TMode extends Partial<Zuord.MergeBaseMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = mode ? zuordCore.modeResolve([zuord.mergeBaseMode, mode]) : zuord.mergeBaseMode;
    type ResolvedMode = ZuordCore.ModeResolve<[typeof zuord.mergeBaseMode, TMode]>;

    return internal.merge(content, resolvedMode) as Zuord.Merge<TContent, ResolvedMode>;
}

export const mergeBaseMode = internal.mergeBaseMode satisfies Zuord.MergeBaseMode;