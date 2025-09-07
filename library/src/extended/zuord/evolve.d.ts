import type { restrict as $restrict } from "./evolve.runtime";
import type { strict as $strict } from "./evolve.runtime";

type evolveAPI = {
    readonly restrict: typeof $restrict;
    readonly strict: typeof $strict;
}

export declare const evolve: evolveAPI;

export type * as Evolve from "./evolve.types";