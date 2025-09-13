import type { restrict as $restrict } from "./evolve.runtime";

type evolveAPI = {
    readonly restrict: typeof $restrict;
}

export declare const evolve: evolveAPI;

// @zuord-exclude
export type Evolve = any;

export type * as Evolve from "./evolve.types";