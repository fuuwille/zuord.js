import type { array as $array } from "./plainType.runtime";
import type { tuple as $tuple } from "./plainType.runtime";

type plainTypeAPI = {
    array: typeof $array;
    tuple: typeof $tuple;
}

export declare const plainType: plainTypeAPI;

// @zuord-exclude
export type PlainType = any;

export type * as PlainType from "./plainType.types";