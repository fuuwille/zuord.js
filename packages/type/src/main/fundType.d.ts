import type { primitive as $primitive } from "./fundType.runtime";
import type { plain as $plain } from "./fundType.runtime";
import type { array as $array } from "./fundType.runtime";
import type { tuple as $tuple } from "./fundType.runtime";
import type { func as $func } from "./fundType.runtime";

type fundTypeAPI = {
    primitive: typeof $primitive;
    plain: typeof $plain;
    array: typeof $array;
    tuple: typeof $tuple;
    func: typeof $func;
}

export declare const fundType: fundTypeAPI;

// @zuord-exclude
export type FundType = any;

export type * as FundType from "./fundType.types";