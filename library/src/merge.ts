import { internalZuord as internal } from "./internal";
import { zuordCore as zuord } from "@zuord/core";
import { Merge } from "./merge.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordType } from "@zuord/type";

// PLAIN

export function plain <TContent extends [...ZuordType.Plain[]]> (content: TContent) 
    : Merge.Object<TContent>;

export function plain <TContent extends [...ZuordType.Plain[]], TMode extends Shape.MergeMode> (content: TContent, mode: TMode)
    : Merge.Object<TContent, TMode>;

export function plain <TContent extends [...ZuordType.Plain[]], TMode extends Shape.MergeMode> (content: TContent, mode?: TMode) {
    if(!shape.mergeContent(content)) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    if(!shape.mergeMode(mode)) {
        throw new TypeError("Merge function expects the mode to be a valid MergeMode.");
    }

    return internal.merge.object(content, zuord.mode.resolve([mode ?? {}])) as Merge.Object<TContent, TMode>;
}

// ARRAY

export function array <TContent extends [...ZuordType.Array[]]> (content: TContent) 
    : Merge.Object<TContent>;

export function array <TContent extends [...ZuordType.Array[]], TMode extends Shape.MergeMode> (content: TContent, mode: TMode)
    : Merge.Object<TContent, TMode>;

export function array <TContent extends [...ZuordType.Array[]], TMode extends Shape.MergeMode> (content: TContent, mode: TMode = {} as TMode) {
    if(!shape.mergeContent(content)) {
        throw new TypeError("Merge function expects the content to be an array of integrate elements.");
    }

    if(!shape.mergeMode(mode)) {
        throw new TypeError("Merge function expects the mode to be a valid MergeMode.");
    }

    return internal.merge.object(content, zuord.mode.resolve([mode])) as Merge.Object<TContent, TMode>;
}


// EXPORT

type merge = {
    readonly plain: typeof plain;
    readonly array: typeof array;
}

export const merge: merge = {
    plain: plain,
    array: array
};