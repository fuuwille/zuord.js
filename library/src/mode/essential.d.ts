import { integrate as $integrate } from "./index.runtime";
import { integrateArray as $integrateArray } from "./index.runtime";

type essantialAPI = {
    readonly integrate: typeof $integrate;
    readonly integrateArray: typeof $integrateArray;
}

export declare const essantial: essantialAPI;

export { Essential } from "./essantial.types";