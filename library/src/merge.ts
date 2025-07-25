import { internalZuord as internal } from "./internal";
import { zuordCore } from "@zuord/core";
import { MergeMode, Merge } from "./merge.types";
import { shapeZuord, ShapeZuord } from "./shape";

export function merge <TContent extends ShapeZuord.MergeContent> (content: [...TContent]) 
    : Merge<TContent>;

export function merge <TContent extends ShapeZuord.MergeContent, TMode extends Partial<MergeMode>> (content: [...TContent], mode: TMode)
    : Merge<TContent, TMode>;

export function merge <TContent extends ShapeZuord.MergeContent, TMode extends Partial<MergeMode>> (content: [...TContent], mode?: TMode) {
    if(!(shapeZuord.mergeContent(content))) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    return internal.merge(content, zuordCore.modeResolve([mergeMode, mode ?? {}])) as Merge<TContent, TMode>;
}

export const mergeMode = internal.mergeMode satisfies MergeMode;