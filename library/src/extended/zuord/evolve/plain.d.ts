import type { restrict as $restrict } from "./plain.runtime";
import type { strict as $strict } from "./plain.runtime";

type plainAPI = {
    readonly restrict: typeof $restrict;
    readonly strict: typeof $strict;
}

export declare const plain: plainAPI;

export { Plain } from "./plain.types";