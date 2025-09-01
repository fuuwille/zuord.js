import type { loose as $loose } from "./plain.runtime";
import type { restrict as $restrict } from "./plain.runtime";
import type { strict as $strict } from "./plain.runtime";

type plainAPI = {
    loose: typeof $loose;
    restrict: typeof $restrict;
    strict: typeof $strict;
}

export declare const plain: plainAPI;

export type * as Plain from "./plain.types";