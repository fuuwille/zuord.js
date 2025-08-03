import { plain as $plain } from "./index.runtime";

type mergeAPI = {
    plain: typeof $plain;
}

export declare const merge: mergeAPI;

export { Merge } from "./index.types";