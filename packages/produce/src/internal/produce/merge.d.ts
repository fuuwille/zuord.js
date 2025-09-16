import type { plain as $plain } from "./merge.runtime";
import type { array as $array } from "./merge.runtime";

type mergeAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

/**
 * @internal
 */
export declare const merge: mergeAPI;

// @zuord-exclude
export type Merge = any;

/**
 * @internal
 */
export type * as Merge from "./merge.types";