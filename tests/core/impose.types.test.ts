import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Patch is never, should return TCurrent
 */
export type Test1 = ZuordTest.Assert<ZuordTest.IsEqual<Test1Sample, Test1Expected>>;

type Test1Sample = Zuord.ImposeRaw<{ a: number }, never, { a: 222 }>;

type Test1Expected = { a: 222 };