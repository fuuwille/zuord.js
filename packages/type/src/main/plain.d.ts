import type { array as $array } from "./plain.runtime.js";
import type { tuple as $tuple } from "./plain.runtime.js";

type zuordPlainAPI = {
    array: typeof $array;
    tuple: typeof $tuple;
}

export declare const zuordPlain: zuordPlainAPI;

export * as ZuordPlain from "./plain.types.js";