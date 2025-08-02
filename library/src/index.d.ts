import { integrate as $integrate } from "./index.runtime";
import { integrateArray as $integrateArray } from "./index.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
}

export declare const zuord: zuordAPI;

export { Zuord } from "./index.types";