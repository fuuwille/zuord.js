import type { nest as $nest } from "./arrayType.runtime";
import type { empty as $empty } from "./arrayType.runtime";

type arrayTypeAPI = {
    nest: typeof $nest;
    empty: typeof $empty;
};

export declare const arrayType: arrayTypeAPI;

// @zuord-exclude
export type ArrayType = any;

export type * as ArrayType from "./arrayType.types";