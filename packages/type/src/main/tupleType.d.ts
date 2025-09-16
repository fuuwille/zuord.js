import type { first as $first } from "./tupleType.runtime";
import type { last as $last } from "./tupleType.runtime";
import type { nest as $nest } from "./tupleType.runtime";

type tupleTypeAPI = {
    first: typeof $first;
    last: typeof $last;
    nest: typeof $nest;
}

export declare const tupleType: tupleTypeAPI;

// @zuord-exclude
export type TupleType = any;

export type * as TupleType from "./tupleType.types";