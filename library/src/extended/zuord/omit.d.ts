import type { loose as $loose } from "./omit.runtime";

type omitAPI = {
    readonly loose: typeof $loose;
};

export declare const omit: omitAPI;

export type * as Omit from "./omit.types";