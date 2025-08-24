import { plain as $plain } from "./integrate.runtime";
import { array as $array } from "./integrate.runtime";

type integrateAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

export declare const integrate: integrateAPI;

export * as Integrate from "./integrate.types";