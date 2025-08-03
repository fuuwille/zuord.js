import { integrate as $integrate } from "./zuord.runtime";
import { integrateArray as $integrateArray } from "./zuord.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
}

export declare const zuord: zuordAPI;

export { Zuord } from "./zuord.types";