import type { first as $first } from "./tuple.runtime.js";
import type { last as $last } from "./tuple.runtime.js";
import type { nest as $nest } from "./tuple.runtime.js";

type zuordTupleAPI = {
    first: typeof $first;
    last: typeof $last;
    nest: typeof $nest;
}

export declare const zuordTuple: zuordTupleAPI;

export * as ZuordTuple from "./tuple.types.js";