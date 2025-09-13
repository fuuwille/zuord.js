import type { loose as $loose } from "./merge.runtime";
import type { array as $array } from "./merge.runtime";

type mergeAPI = {
    loose: typeof $loose;
    array: typeof $array;
}

export declare const merge: mergeAPI;

// @zuord-exclude
export type Merge = any;

export type * as Merge from "./merge.types";