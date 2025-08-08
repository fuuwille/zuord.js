import type { plain as $plain } from "./index.runtime";
import type { array as $array } from "./index.runtime";

type mergeAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

export declare const merge: mergeAPI;

export { Merge } from "./index.types";