import type { loose } from "./merge.runtime";
import type { array } from "./merge.runtime";

type mergeAPI = {
    readonly loose: typeof loose;
    readonly array: typeof array;
}

export declare const merge: mergeAPI;

// @zuord-exclude
export type Merge = any;

export type * as Merge from "./merge.types";