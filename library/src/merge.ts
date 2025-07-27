import { internalZuord as internal } from "./internal";
import { zuordCore as zuord } from "@zuord/core";
import { MergeMode, Merge } from "./merge.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordType } from "@zuord/type";

// PLAIN

export function plain <TContent extends [...ZuordType.Plain[]]> (content: TContent) 
    : Merge<TContent>;

export function plain <TContent extends [...ZuordType.Plain[]], TMode extends Shape.MergeMode> (content: TContent, mode: TMode)
    : Merge<TContent, TMode>;

export function plain <TContent extends Shape.MergeContent, TMode extends Shape.MergeMode> (content: TContent, mode?: TMode) {
    if(!shape.mergeContent(content)) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    if(!shape.mergeMode(mode)) {
        throw new TypeError("Merge function expects the mode to be a valid MergeMode.");
    }

    return internal.merge(content, zuord.modeResolve([mode, mode ?? {}])) as Merge<TContent, TMode>;
}

// ARRAY

export function array <TContent extends ZuordType.Array[]> (content: [...TContent]) 
    : Merge<TContent>;

export function array <TContent extends ZuordType.Array[], TMode extends Shape.MergeMode> (content: [...TContent], mode: TMode)
    : Merge<TContent, TMode>;

export function array <TContent extends Shape.MergeContent, TMode extends Shape.MergeMode> (content: [...TContent], mode?: TMode) {
    if(!shape.mergeContent(content)) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    if(!shape.mergeMode(mode)) {
        throw new TypeError("Merge function expects the mode to be a valid MergeMode.");
    }

    return internal.merge(content, zuord.modeResolve([mode, mode ?? {}])) as Merge<TContent, TMode>;
}

// MODE

export const mode = internal.mergeMode satisfies MergeMode;