import type { integrate as $integrate } from "./produce.runtime";
import type { merge as $merge } from "./produce.runtime";
import type { evolve as $evolve } from "./produce.runtime";
import type { pick as $pick } from "./produce.runtime";
import type { omit as $omit } from "./produce.runtime";

type zuordProduceAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuordProduce: zuordProduceAPI;

// @zuord-exclude
export type ZuordProduce = any;

export type * as ZuordProduce from "./produce.types";