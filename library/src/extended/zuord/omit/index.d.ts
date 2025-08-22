import { plain as $plain } from "./index.runtime";

type omitAPI = {
    readonly plain: typeof $plain;
};

export declare const omit: omitAPI;

export { Omit } from "./index.types";