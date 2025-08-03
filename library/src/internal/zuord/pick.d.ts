import { plain as $plain } from "./pick.runtime";

type pickAPI = {
    plain: typeof $plain;
}

export declare const pick: pickAPI;

export { Pick } from "./pick.types";