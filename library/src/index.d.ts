import { integrate as $integrate } from "./index.runtime";
import { integrateArray as $integrateArray } from "./index.runtime";
import { mode as $mode } from "./index.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    mode: typeof $mode;
}

export declare const zuord: zuordAPI;

export { Zuord } from "./index.types";