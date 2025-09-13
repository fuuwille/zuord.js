import type { plain as $plain } from "./omit.runtime";

type omitAPI = {
    plain: typeof $plain;
}

export declare const omit: omitAPI;

// @ts-ignore
export type Omit = any;

export type * as Omit from "./omit.types";