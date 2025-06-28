import { ZuordAssert } from "./assert.types";
import { ZuordIsEqual } from "./isEqual.types";

export namespace ZuordTest {

    export type Assert<T extends true> = ZuordAssert<T>;

    export type IsEqual<A, B> = ZuordIsEqual<A, B>;
}