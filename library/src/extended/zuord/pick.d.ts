import type { loose as $loose } from "./pick.runtime";

type pickAPI = {
    loose: typeof $loose;
}

export declare const pick: pickAPI;

export type Pick = {};

export type * as Pick from "./pick.types";