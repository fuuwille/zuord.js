import type { plain as $plain } from "./evolve.runtime";
import type { array as $array } from "./evolve.runtime";

type evolveAPI = {
    plain: typeof $plain;
    array: typeof $array;
};

export declare const evolve: evolveAPI;

// @zuord-exclude
export type Evolve = any;

export type * as Evolve from "./evolve.types";