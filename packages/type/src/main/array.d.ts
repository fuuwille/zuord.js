import type { nest as $nest } from "./array.runtime";
import type { empty as $empty } from "./array.runtime";

type zuordArrayAPI = {
    nest: typeof $nest;
    empty: typeof $empty;
};

export declare const zuordArray: zuordArrayAPI;

// @zuord-exclude
export type ZuordArray = any;

export type * as ZuordArray from "./array.types";