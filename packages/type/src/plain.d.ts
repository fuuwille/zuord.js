import type { array as $array } from "./plain.runtime";
import type { tuple as $tuple } from "./plain.runtime";

type zuordPlainAPI = {
    array: typeof $array;
    tuple: typeof $tuple;
}

export declare const zuordPlain: zuordPlainAPI;

export { ZuordPlain } from "./plain.types";