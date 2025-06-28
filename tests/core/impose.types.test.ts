import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Patch is never, should return TCurrent
 */
export type Test1 = ZuordTest.Assert<ZuordTest.IsEqual<Test1Sample, Test1Expected>>;

type Test1Sample = Zuord.ImposeRaw<{ a: number }, never, { a: 222 }>;

type Test1Expected = { a: 222 };


/**
 * Patch is undefined, should return TCurrent
 */
export type Test2 = ZuordTest.Assert<ZuordTest.IsEqual<Test2Sample, Test2Expected>>;

type Test2Sample = Zuord.ImposeRaw<{ a: number }, undefined, { a: 222 }>;

type Test2Expected = { a: 222 };