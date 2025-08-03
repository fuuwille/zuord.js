import { integrate as $integrate } from "./mode.runtime";
import { integrateArray as $integrateArray } from "./mode.runtime";

type zuordModeAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
}

export declare const zuordMode: zuordModeAPI;

export { ZuordMode } from "./mode.types";