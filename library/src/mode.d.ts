import { integrate as $integrate } from "./mode.runtime";
import { integrateArray as $integrateArray } from "./mode.runtime";
import { merge as $merge } from "./mode.runtime";
import { mergeArray as $mergeArray } from "./mode.runtime";

type zuordModeAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    merge: typeof $merge;
    mergeArray: typeof $mergeArray;
}

export declare const zuordMode: zuordModeAPI;

export { ZuordMode } from "./mode.types";