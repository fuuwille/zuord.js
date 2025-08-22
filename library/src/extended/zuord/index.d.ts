import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";
import { evolve as $evolve } from "./index.runtime";
import { pick as $pick } from "./index.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
    pick: typeof $pick;
}

export declare const zuordX: zuordXAPI;

export { ZuordX } from "./index.types";