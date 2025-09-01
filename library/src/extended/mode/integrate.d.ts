import type { plain as $plain } from "./integrate.runtime";
import type { array as $array } from "./integrate.runtime";

type integrateAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

export declare const integrate: integrateAPI;

export type * as Integrate from "./integrate.types";