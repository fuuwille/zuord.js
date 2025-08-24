import { loose as $loose } from "./plain.runtime";

type plainAPI = {
    loose: typeof $loose;
}

export declare const plain: plainAPI;

export * as Plain from "./plain.types";