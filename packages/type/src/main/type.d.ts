import type { primitive as $primitive } from "./type.runtime";
import type { plain as $plain } from "./type.runtime";
import type { array as $array } from "./type.runtime";
import type { tuple as $tuple } from "./type.runtime";
import type { func as $func } from "./type.runtime";

type zuordTypeAPI = {
    primitive: typeof $primitive;
    plain: typeof $plain;
    array: typeof $array;
    tuple: typeof $tuple;
    func: typeof $func;
}

export declare const zuordType: zuordTypeAPI;

// @zuord-exclude
export type ZuordType = any;

export type * as ZuordType from "./type.types";