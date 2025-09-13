import type { loose as $loose } from "./integrate.runtime";
import type { restrict as $restrict } from "./integrate.runtime";
import type { array as $array } from "./integrate.runtime";

type integrateAPI = {
    loose: typeof $loose;
    restrict: typeof $restrict;
    array: typeof $array;
}

export declare const integrate: integrateAPI;

// @ts-ignore
export type Integrate = any;

export type * as Integrate from "./integrate.types";