import type { loose as $loose } from "./plain.runtime";

type plainAPI = {
    readonly loose: typeof $loose;
};

export declare const plain: plainAPI;

export type * as Plain from "./plain.types";