import { integrate as $integrate } from "./index.runtime";
import { integrateArray as $integrateArray } from "./index.runtime";
import { extended as $extended } from "./index.runtime";

type zuordModeAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    extended: typeof $extended;
}

export declare const zuordMode: zuordModeAPI;

export { ZuordMode } from "./index.types";