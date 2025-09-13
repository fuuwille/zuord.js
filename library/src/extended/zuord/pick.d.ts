import type { loose as $loose } from "./pick.runtime";

type pickAPI = {
    loose: typeof $loose;
}

export declare const pick: pickAPI;

// @zuord-exclude
export type Pick = any;

export type * as Pick from "./pick.types";