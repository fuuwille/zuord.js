import type { plain as $plain } from "./evolve.runtime";
import type { array as $array } from "./evolve.runtime";

type evolveAPI = {
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

/**
 * @internal
 */
export declare const evolve: evolveAPI;

// @zuord-exclude
export type Evolve = any;

/**
 * @internal
 */
export type * as Evolve from "./evolve.types";