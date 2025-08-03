import { integrate as $integrate } from "./mode.runtime";
import { merge as $merge } from "./mode.runtime";

type zuordModeXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
}

export declare const zuordModeX: zuordModeXAPI;

export { ZuordModeX } from "./mode.types";