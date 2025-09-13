import type { integrate as $integrate } from "./index.runtime";
import type { merge as $merge } from "./index.runtime";
import type { evolve as $evolve } from "./index.runtime";
import type { pick as $pick } from "./index.runtime";
import type { omit as $omit } from "./index.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuordX: zuordXAPI;

export type ZuordX = {};

export type * as ZuordX from "./index.types";