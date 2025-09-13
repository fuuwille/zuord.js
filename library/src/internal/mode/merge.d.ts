import type { plain as $plain } from "./merge.runtime";
import type { array as $array } from "./merge.runtime";

type mergeAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

export declare const merge: mergeAPI;

export type Merge = {};

export type * as Merge from "./merge.types";