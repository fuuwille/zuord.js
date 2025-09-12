import type { loose as $loose } from "./omit.runtime";

type omitAPI = {
    loose: typeof $loose;
}

export declare const omit: omitAPI;

export type * as Omit from "./omit.types";