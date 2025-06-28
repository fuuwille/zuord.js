import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Patch is never, should return TCurrent
 */
export type Test1 = ZuordTest.Assert<ZuordTest.IsEqual<Test1Sample, Test1Expected>>;

type Test1Sample = Zuord.ImposeLooseRaw<{ a: number }, never, { a: 222 }>;

type Test1Expected = { a: 222 };


/**
 * Patch is undefined, should return TCurrent
 */
export type Test2 = ZuordTest.Assert<ZuordTest.IsEqual<Test2Sample, Test2Expected>>;

type Test2Sample = Zuord.ImposeLooseRaw<{ a: number }, undefined, { a: 222 }>;

type Test2Expected = { a: 222 };


/**
 * Patch is a plain object, should recursively impose
 */
export type Test3 = ZuordTest.Assert<ZuordTest.IsEqual<Test3Sample, Test3Expected>>;

type Test3Sample = Zuord.ImposeLooseRaw<{ a: number; b: string }, { a: 7 }, { a: 222; b: "test" }>;

type Test3Expected = { a: 7; b: "test" };