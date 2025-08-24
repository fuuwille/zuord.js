import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";
import { evolve as $evolve } from "./index.runtime";
import { pick as $pick } from "./index.runtime"
import { omit as $omit } from "./index.runtime";

type $zuordAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const $zuord: $zuordAPI;

export * as $Zuord from "./index.types";