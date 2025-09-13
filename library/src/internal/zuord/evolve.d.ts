import type { plain as $plain } from "./evolve.runtime";
import type { array as $array } from "./evolve.runtime";

type evolveAPI = {
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

export declare const evolve: evolveAPI;

export type Evolve = {};

export type * as Evolve from "./evolve.types";