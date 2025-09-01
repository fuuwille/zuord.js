import type { integrate as $integrate } from "./mode.runtime";
import type { integrateArray as $integrateArray } from "./mode.runtime";
import type { merge as $merge } from "./mode.runtime";
import type { mergeArray as $mergeArray } from "./mode.runtime";
import type { evolve as $evolve } from "./mode.runtime";
import type { pick as $pick } from "./mode.runtime";
import type { omit as $omit } from "./mode.runtime";

type zuordModeAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    merge: typeof $merge;
    mergeArray: typeof $mergeArray;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuordMode: zuordModeAPI;

export type * as ZuordMode from "./mode.types";