import type * as $array from "./array.runtime";

type arrayAPI = {
    loose: typeof $array.loose;
}

export declare const array: arrayAPI;

export { Array } from "./array.types";