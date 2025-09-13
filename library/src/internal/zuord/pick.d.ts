import type { plain as $plain } from "./pick.runtime";

type pickAPI = {
    plain: typeof $plain;
}

export declare const pick: pickAPI;

export type Pick = {};

export type * as Pick from "./pick.types";