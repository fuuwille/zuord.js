import { plain } from "./index.runtime";

type pickAPI = {
    plain: typeof plain;
};

export declare const pick: pickAPI;

export { Pick } from "./index.types";