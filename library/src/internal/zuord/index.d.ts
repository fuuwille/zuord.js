import { integrate as $integrate } from "./index.runtime";
import { merge as $merge } from "./index.runtime";

type $zuordAPI = {
    integrate: typeof $integrate;
    merge: typeof $merge;
}

export declare const $zuord: $zuordAPI;

export { $Zuord } from "./index.types";