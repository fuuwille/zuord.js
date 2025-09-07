import type { loose as $loose } from "./integrate.runtime";
import type { restrict as $restrict } from "./integrate.runtime";
import type { strict as $strict } from "./integrate.runtime";
import type { array as $array } from "./integrate.runtime";

type integrateAPI = {
    loose: typeof $loose;
    restrict: typeof $restrict;
    strict: typeof $strict;
    array: typeof $array;
}

export declare const integrate: integrateAPI;

export type * as Integrate from "./integrate.types";