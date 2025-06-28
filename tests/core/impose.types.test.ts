import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Loose mode with primitive base:
 * Patch is `never`, should return current value
 */
export type T101 = ZuordTest.Assert<ZuordTest.IsEqual<T101S, T101E>>;

type T101S = Zuord.ImposeLoose<string, never, "test">;

type T101E = "test";

/**
 * Loose mode with primitive base:
 * Patch is `undefined`, should return current value
 */
export type T102 = ZuordTest.Assert<ZuordTest.IsEqual<T102S, T102E>>;

type T102S = Zuord.ImposeLoose<string, undefined, "test">;

type T102E = "test";