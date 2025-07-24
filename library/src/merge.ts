import { internalZuord as internal } from "./internal";
import { zuordCore } from "@zuord/core";
import { MergeMode, Merge, MergeShape } from "./merge.types";

export function merge <TContent extends MergeShape> (content: [...TContent]) 
    : Merge<TContent>;

export function merge <TContent extends MergeShape, TMode extends Partial<MergeMode>> (content: [...TContent], mode: TMode)
    : Merge<TContent, TMode>;

export function merge <TContent extends MergeShape, TMode extends Partial<MergeMode>> (content: [...TContent], mode?: TMode) {
    return internal.merge(content, zuordCore.modeResolve([mergeMode, mode ?? {}])) as Merge<TContent, TMode>;
}

export const mergeMode = internal.mergeMode satisfies MergeMode;