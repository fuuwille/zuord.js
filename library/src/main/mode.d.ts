import type { integrate as $integrate } from "./mode.runtime";
import type { merge as $merge } from "./mode.runtime";
import type { evolve as $evolve } from "./mode.runtime";
import type { pick as $pick } from "./mode.runtime";
import type { omit as $omit } from "./mode.runtime";

type zuordModeAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuordMode: zuordModeAPI;

export type * as ZuordMode from "./mode.types";