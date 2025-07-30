import { internalZuord as internal } from "./internal";
import { zuordCore as zuord } from "@zuord/core";
import { Merge } from "./merge.types";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";
import { Mode } from "./mode.types";

// PLAIN

export function plain <TContent extends ZuordType.PlainArray> (content: [...TContent]) 
    :  Merge.Object<TContent>

export function plain <TContent extends ZuordType.PlainArray, TMode extends Partial<Mode.Merge>> (content: [...TContent], mode: TMode)
    :  Merge.Object<TContent>

export function plain <TContent extends ZuordType.PlainArray, TMode extends Partial<Mode.Merge>> (content: [...TContent], mode?: TMode)
    :  Merge.Object<TContent>
    {

    return internal.merge.object(content, zuord.mode.resolve([mode ?? {}]));
}

// ARRAY

export function array <TContent extends [...ZuordType.Array[]]> (content: TContent) 
    : Merge.Object<TContent>;

export function array <TContent extends [...ZuordType.Array[]], TMode extends Partial<Mode.Merge>> (content: TContent, mode: TMode)
    : Merge.Object<TContent, TMode>;

export function array <TContent extends [...ZuordType.Array[]], TMode extends Partial<Mode.Merge>> (content: TContent, mode: TMode = {} as TMode) {
    
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