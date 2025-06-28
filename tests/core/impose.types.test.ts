import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Patch is never, should return TCurrent
 */
export type ImposeLoose_Test1 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose_Test1Sample, ImposeLoose_Test1Expected>>;

type ImposeLoose_Test1Sample = Zuord.ImposeLoose<{ a: number }, never, { a: 222 }>;

type ImposeLoose_Test1Expected = { a: 222 };


/**
 * Patch is undefined, should return TCurrent
 */
export type ImposeLoose_Test2 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose_Test2Sample, ImposeLoose_Test2Expected>>;

type ImposeLoose_Test2Sample = Zuord.ImposeLoose<{ a: number }, undefined, { a: 222 }>;

type ImposeLoose_Test2Expected = { a: 222 };


/**
 * Patch is a plain object, should recursively impose
 */
export type ImposeLoose_Test3 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose_Test3Sample, ImposeLoose_Test3Expected>>;

type ImposeLoose_Test3Sample = Zuord.ImposeLoose<{ a: number; b: string }, { a: 7 }, { a: 222; b: "test" }>;

type ImposeLoose_Test3Expected = { a: 7; b: "test" };