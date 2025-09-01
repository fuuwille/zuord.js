import type { plain as $plain } from "./omit.runtime";

type omitAPI = {
    plain: typeof $plain;
}

export declare const omit: omitAPI;

export type * as Omit from "./omit.types";