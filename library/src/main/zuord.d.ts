import { integrate as $integrate } from "./zuord.runtime";
import { integrateArray as $integrateArray } from "./zuord.runtime";
import { merge as $merge } from "./zuord.runtime";
import { mergeArray as $mergeArray } from "./zuord.runtime";
import { evolve as $evolve } from "./zuord.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    merge: typeof $merge;
    mergeArray: typeof $mergeArray;
    evolve: typeof $evolve;
}

export declare const zuord: zuordAPI;

export { Zuord } from "./zuord.types";