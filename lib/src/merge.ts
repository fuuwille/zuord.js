import { Zuord } from "zuord";
import { internalZuord as internal } from "./internal";
import { zuordCore } from "@zuord/core";

export function merge <TContent extends object[], TMode extends Partial<Zuord.MergeBaseMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = mode ? zuordCore.modeResolve([internal.mergeBaseMode, mode]) : internal.mergeBaseMode;
    return internal.merge(content, resolvedMode) as Zuord.Merge<TContent, Zuord.MergeResolvedMode<TMode>>;
}