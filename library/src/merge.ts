import { Zuord, zuord } from ".";
import { internalZuord as internal } from "./internal";
import { ZuordCore, zuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";

export function merge <TContent extends ZuordType.Plain[], TMode extends Partial<Zuord.MergeMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = zuordCore.modeResolve([zuord.mergeMode, mode ?? {}]);
    type ResolvedMode = ZuordCore.ModeResolve<[typeof zuord.mergeMode, TMode]>;

    return internal.merge(content, resolvedMode) as Zuord.Merge<TContent, ResolvedMode>;
}

export const mergeMode = internal.mergeMode satisfies Zuord.MergeMode;