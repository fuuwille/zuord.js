import type { plain as $plain } from "./omit.runtime";

type omitAPI = {
    plain: typeof $plain;
}

/**
 * @internal
 */
export declare const omit: omitAPI;

// @zuord-exclude
export type Omit = any;

/**
 * @internal
 */
export type * as Omit from "./omit.types";