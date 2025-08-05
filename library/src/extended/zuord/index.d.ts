import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";
import { evolve as $evolve } from "./index.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
}

export declare const zuordX: zuordXAPI;

export { ZuordX } from "./index.types";