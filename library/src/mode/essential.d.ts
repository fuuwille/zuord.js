import { integrate as $integrate } from "./index.runtime";
import { integrateArray as $integrateArray } from "./index.runtime";

type essentialAPI = {
    readonly integrate: typeof $integrate;
    readonly integrateArray: typeof $integrateArray;
}

export declare const essential: essentialAPI;

export { Essential } from "./essential.types";