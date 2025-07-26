import { internalZuord as internal } from "./internal";
import { zuordCore as zuord } from "@zuord/core";
import { MergeMode, Merge } from "./merge.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";

export function merge <TContent extends Shape.MergeContent> (content: [...TContent]) 
    : Merge<TContent>;

export function merge <TContent extends Shape.MergeContent, TMode extends Partial<MergeMode>> (content: [...TContent], mode: TMode)
    : Merge<TContent, TMode>;

export function merge <TContent extends Shape.MergeContent, TMode extends Partial<MergeMode>> (content: [...TContent], mode?: TMode) {
    if(!(shape.mergeContent(content))) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    return internal.merge(content, zuord.modeResolve([mergeMode, mode ?? {}])) as Merge<TContent, TMode>;
}

export const mergeMode = internal.mergeMode satisfies MergeMode;