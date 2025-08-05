import { restrict as $restrict } from "./plain.runtime";

type plainAPI = {
    readonly restrict: typeof $restrict;
}

export declare const plain: plainAPI;

export { Plain } from "./plain.types";