import { integrate as $integrate } from "./integrate";
import { merge as $merge } from "./merge";

type $zuordAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
}

export declare const $zuord: $zuordAPI;

export { $Zuord } from "./zuord.types";