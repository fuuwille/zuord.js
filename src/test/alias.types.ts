import { ZuordAssert } from "./assert.types";
import { ZuordIsEqual } from "./isEqual.types";
import { ZuordComparison } from "./comparison.types";

export namespace ZuordTest {

    export type Assert<T extends true> = ZuordAssert<T>;

    export type IsEqual<A, B> = ZuordIsEqual<A, B>;

    export type Comparison = ZuordComparison;
}