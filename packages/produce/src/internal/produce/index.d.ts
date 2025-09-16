import type { integrate as $integrate } from "./index.runtime";
import type { merge as $merge } from "./index.runtime";
import type { evolve as $evolve } from "./index.runtime";
import type { pick as $pick } from "./index.runtime"
import type { omit as $omit } from "./index.runtime";

type $zuordProduceAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

/**
 * @internal
 */
export declare const $zuordProduce: $zuordProduceAPI;

// @zuord-exclude
export type $ZuordProduce = any;

/**
 * @internal
 */
export type * as $ZuordProduce from "./index.types";