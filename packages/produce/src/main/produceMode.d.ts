import type { integrate as $integrate } from "./produceMode.runtime";
import type { merge as $merge } from "./produceMode.runtime";
import type { evolve as $evolve } from "./produceMode.runtime";
import type { pick as $pick } from "./produceMode.runtime";
import type { omit as $omit } from "./produceMode.runtime";

type zuordProduceModeAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuordProduceMode: zuordProduceModeAPI;

// @zuord-exclude
export type ZuordProduceMode = any;

export type * as ZuordProduceMode from "./produceMode.types";