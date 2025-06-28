import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Patch is never, should return TCurrent
 */
export type T101 = ZuordTest.Assert<ZuordTest.IsEqual<T101_Sample, T101_Expected>>;

type T101_Sample = Zuord.ImposeLoose<{ a: number }, never, { a: 222 }>;

type T101_Expected = { a: 222 };


/**
 * Patch is undefined, should return TCurrent
 */
export type T102 = ZuordTest.Assert<ZuordTest.IsEqual<T102_Sample, T102_Expected>>;

type T102_Sample = Zuord.ImposeLoose<{ a: number }, undefined, { a: 222 }>;

type T102_Expected = { a: 222 };


/**
 * Patch is an empty object, should return TCurrent
 */
export type T103 = ZuordTest.Assert<ZuordTest.IsEqual<T103_Sample, T103_Expected>>;

type T103_Sample = Zuord.ImposeLoose<{ a: number; b: string }, { }, { a: 222; b: "test" }>;

type T103_Expected = { a: 222; b: "test" };