import { unknown as $unknown } from "./merge.runtime";
import { plain as $plain } from "./merge.runtime";
import { array as $array } from "./merge.runtime";

type mergeAPI = {
    unknown: typeof $unknown;
    plain: typeof $plain;
    array: typeof $array;
}

export declare const merge: mergeAPI;