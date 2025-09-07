import type { loose } from "./merge.runtime";

type mergeAPI = {
    readonly loose: typeof loose;
}

export declare const merge: mergeAPI;

export type * as Merge from "./merge.types";