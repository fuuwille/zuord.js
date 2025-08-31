import type { primitive as $primitive } from "./type.runtime.js";
import type { plain as $plain } from "./type.runtime.js";
import type { array as $array } from "./type.runtime.js";
import type { tuple as $tuple } from "./type.runtime.js";
import type { func as $func } from "./type.runtime.js";

type zuordTypeAPI = {
    primitive: typeof $primitive;
    plain: typeof $plain;
    array: typeof $array;
    tuple: typeof $tuple;
    func: typeof $func;
}

export declare const zuordType: zuordTypeAPI;

export * as ZuordType from "./type.types.js";