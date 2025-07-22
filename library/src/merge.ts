import { internalZuord as internal } from "./internal";
import { ZuordType } from "@zuord/type";
import { ZuordCore, zuordCore } from "@zuord/core";
import { MergeMode, Merge } from "./merge.types";

export function merge <TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> (content: [...TContent], mode?: TMode) {
    const resolvedMode = zuordCore.modeResolve([mergeMode, mode ?? {}]);
    type ResolvedMode = ZuordCore.ModeResolve<[typeof mergeMode, TMode]>;

    return internal.merge(content, resolvedMode) as Merge<TContent, ResolvedMode>;
}

export const mergeMode = internal.mergeMode satisfies MergeMode;