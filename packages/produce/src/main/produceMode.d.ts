import type { integrate as $integrate } from "./produceMode.runtime";
import type { merge as $merge } from "./produceMode.runtime";
import type { evolve as $evolve } from "./produceMode.runtime";
import type { pick as $pick } from "./produceMode.runtime";
import type { omit as $omit } from "./produceMode.runtime";

type produceModeAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const produceMode: produceModeAPI;

// @zuord-exclude
export type ProduceMode = any;

export type * as ProduceMode from "./produceMode.types";