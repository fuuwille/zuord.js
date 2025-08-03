import { plain as $plain } from "./merge.runtime";

type mergeAPI = {
    plain: typeof $plain;
}

export declare const merge: mergeAPI;

export { Merge } from "./merge.types";