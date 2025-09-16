import type { plain as $plain } from "./pick.runtime";

type pickAPI = {
    plain: typeof $plain;
}

/**
 * @internal
 */
export declare const pick: pickAPI;

// @zuord-exclude
export type Pick = any;

/**
 * @internal
 */
export type * as Pick from "./pick.types";