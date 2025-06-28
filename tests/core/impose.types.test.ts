import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Loose mode with primitive base:
 * Patch is `never`, should return current
 */
export type T101 = ZuordTest.Assert<ZuordTest.IsEqual<T101S, T101E>>;

type T101S = Zuord.ImposeLoose<string, never, "test">;

type T101E = "test";

/**
 * Loose mode with primitive base:
 * Patch is `undefined`, should return current
 */
export type T102 = ZuordTest.Assert<ZuordTest.IsEqual<T102S, T102E>>;

type T102S = Zuord.ImposeLoose<string, undefined, "test">;

type T102E = "test";

/**
 * Loose mode with primitive base:
 * Patch is exact general primitive, should return patch
 */
export type T104 = ZuordTest.Assert<ZuordTest.IsEqual<T104S, T104E>>;

type T104S = Zuord.ImposeLoose<string, string, "test">;

type T104E = string;