import type { integrate as $integrate } from "./index.runtime";
import type { merge as $merge } from "./index.runtime";
import type { evolve as $evolve } from "./index.runtime";
import type { pick as $pick } from "./index.runtime";
import type { omit as $omit } from "./index.runtime";

type produceModeXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const produceModeX: produceModeXAPI;

// @zuord-exclude
export type ProduceModeX = any;

export type * as ProduceModeX from "./index.types";