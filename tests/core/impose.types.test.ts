import { Zuord } from "@";
import { ZuordTest } from "@/test";

// 1. Patch is never, should return TCurrent

export type Test1 = ZuordTest.Assert<ZuordTest.IsEqual<Test1Sample, Test1Expected>>;

type Test1Sample = Zuord.ImposeRaw<{ a: number }, never, { a: number }>;

type Test1Expected = { a: number };