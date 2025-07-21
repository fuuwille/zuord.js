import { Zuord, zuord } from "zuord";
import { internalZuord as internal } from "./internal";
import { ZuordCore, zuordCore } from "@zuord/core";

export function merge <TContent extends object[], TMode extends Partial<Zuord.MergeMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = mode ? zuordCore.modeResolve([zuord.mergeMode, mode]) : zuord.mergeMode;
    type ResolvedMode = ZuordCore.ModeResolve<[typeof zuord.mergeMode, TMode]>;

    return internal.merge(content, resolvedMode) as Zuord.Merge<TContent, ResolvedMode>;
}

export const mergeMode = internal.mergeMode satisfies Zuord.MergeMode;