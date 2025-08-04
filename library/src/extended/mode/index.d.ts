import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";
import { evolve as $evolve } from "./index.runtime";

type zuordModeXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
    evolve: typeof $evolve;
}

export declare const zuordModeX: zuordModeXAPI;

export { ZuordModeX } from "./index.types";