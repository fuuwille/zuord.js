import { plain as $plain } from "./merge.runtime";
import { array as $array } from "./merge.runtime";

type mergeAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

export declare const merge: mergeAPI;

export { Merge } from "./merge.types";