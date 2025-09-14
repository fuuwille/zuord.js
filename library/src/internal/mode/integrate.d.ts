import type { plain as $plain } from "./integrate.runtime";
import type { array as $array } from "./integrate.runtime";

type integrateAPI = {
    plain: typeof $plain;
    array: typeof $array;
}

/**
 * @internal
 */
export declare const integrate: integrateAPI;

// @zuord-exclude
export type Integrate = any;

/**
 * @internal
 */
export type * as Integrate from "./integrate.types";