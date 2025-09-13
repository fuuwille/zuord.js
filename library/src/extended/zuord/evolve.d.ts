import type { restrict as $restrict } from "./evolve.runtime";

type evolveAPI = {
    readonly restrict: typeof $restrict;
}

export declare const evolve: evolveAPI;

export type Evolve = {};

export type * as Evolve from "./evolve.types";