import { integrate as $integrate } from "./zuord.runtime";
import { merge as $merge } from "./zuord.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
}

export declare const zuordX: zuordXAPI;

export { ZuordX } from "./zuord.types";