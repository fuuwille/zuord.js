import { loose } from "./plain.runtime";

type plainAPI = {
    readonly loose: typeof loose;
}

export declare const plain: plainAPI;