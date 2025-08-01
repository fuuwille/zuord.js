import type * as $plain from "./plain.runtime";
import type * as $array from "./array";

type plainAPI = {
    loose: typeof $plain.loose;
    restrict: typeof $plain.restrict;
    strict: typeof $plain.strict;
}

export declare const plain: plainAPI;

type arrayAPI = {
    loose: typeof $array.loose;
}

export declare const array: arrayAPI;