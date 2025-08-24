import type { loose as $loose } from "./array.runtime";

type arrayAPI = {
    loose: typeof $loose;
}

export declare const array: arrayAPI;

export * as Array from "./array.types";