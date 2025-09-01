import type { loose as $loose } from "./array.runtime";

type arrayAPI = {
    readonly loose: typeof $loose;
}

export declare const array: arrayAPI;

export type * as Array from "./array.types";