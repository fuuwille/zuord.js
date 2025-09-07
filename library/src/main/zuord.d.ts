import type { integrate as $integrate } from "./zuord.runtime";
import type { merge as $merge } from "./zuord.runtime";
import type { evolve as $evolve } from "./zuord.runtime";
import type { pick as $pick } from "./zuord.runtime";
import type { omit as $omit } from "./zuord.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuord: zuordAPI;

export type * as Zuord from "./zuord.types";