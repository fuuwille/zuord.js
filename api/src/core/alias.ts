import { zuordNormalize } from "./normalize";
import { zuordPattern } from "./pattern";
import { zuordMerge } from "./merge";
import { zuordMergeBy } from "./merge";
import { zuordOmit } from "./omit";
import { zuordPick } from "./pick";

/**
 * 
 */
export namespace zuord {

    // NORMALIZE

    /**
     * 
     */
    export const normalize = zuordNormalize;


    // PATTERN

    /**
     * 
     */
    export const pattern = zuordPattern;


    // MERGE

    /**
     * 
     */
    export const merge = zuordMerge;

    /**
     * 
     */
    export const mergeBy = zuordMergeBy;


    // OMIT

    /**
     * 
     */
    export const omit = zuordOmit;


    // PICK

    /**
     * 
     */
    export const pick = zuordPick;
}