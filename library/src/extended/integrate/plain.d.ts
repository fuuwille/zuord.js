import type * as $plain from "./plain.runtime";

type plainAPI = {
    loose: typeof $plain.loose;
    restrict: typeof $plain.restrict;
    strict: typeof $plain.strict;
}

export declare const plain: plainAPI;