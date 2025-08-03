import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";

type zuordModeXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
}

export declare const zuordModeX: zuordModeXAPI;

export { ZuordModeX } from "./index.types";