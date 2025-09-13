import type { plain as $plain } from "./pick.runtime";

type pickAPI = {
    plain: typeof $plain;
}

export declare const pick: pickAPI;

// @ts-ignore
export type Pick = any;

export type * as Pick from "./pick.types";