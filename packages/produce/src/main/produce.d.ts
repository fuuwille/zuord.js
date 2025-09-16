import type { integrate as $integrate } from "./produce.runtime";
import type { merge as $merge } from "./produce.runtime";
import type { evolve as $evolve } from "./produce.runtime";
import type { pick as $pick } from "./produce.runtime";
import type { omit as $omit } from "./produce.runtime";

type produceAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const produce: produceAPI;

// @zuord-exclude
export type Produce = any;

export type * as Produce from "./produce.types";