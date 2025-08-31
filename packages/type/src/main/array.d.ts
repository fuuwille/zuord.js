import type { nest as $nest } from "./array.runtime.js";
import type { empty as $empty } from "./array.runtime.js";

type zuordArrayAPI = {
    nest: typeof $nest;
    empty: typeof $empty;
};

export declare const zuordArray: zuordArrayAPI;

export * as ZuordArray from "./array.types.js";