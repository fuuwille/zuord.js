import { ZuordAssert } from "./assert.types";
import { ZuordIsEqual } from "./isEqual.types";
import { ZuordComparison, ZuordComparisonSelf, ZuordComparisonSelfList } from "./comparison.types";

export namespace ZuordTest {

    export type Assert<T extends true> = ZuordAssert<T>;

    export type IsEqual<A, B> = ZuordIsEqual<A, B>;

    export type Comparison = ZuordComparison;

    export type ComparisonSelf<T> = ZuordComparisonSelf<T>;

    export type ComparisonSelfList<U extends unknown[]> = ZuordComparisonSelfList<U>;
}