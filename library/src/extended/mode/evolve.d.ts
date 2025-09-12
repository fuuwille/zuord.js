import type { restrict as $restrict } from "./evolve.runtime";
import type { array as $array } from "./evolve.runtime";

type evolveAPI = {
    restrict: typeof $restrict;
    array: typeof $array;
};

export declare const evolve: evolveAPI;

export type * as Evolve from "./evolve.types";