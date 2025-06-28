import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Loose mode with never base:
 * Patch is `never`, should return never
 */
export type T100 = ZuordTest.Assert<ZuordTest.IsEqual<T100S, T100E>>;

type T100S = Zuord.ImposeLoose<never, never, never>;

type T100E = never;

/**
 * Loose mode with primitive base:
 * Patch is `never`, should return current
 */
export type T1010 = ZuordTest.Assert<ZuordTest.IsEqual<T1010S, T1010E>>;

type T1010S = Zuord.ImposeLoose<string, never, "test">;

type T1010E = "test";

/**
 * Loose mode with primitive base:
 * Patch is `undefined`, should return current
 */
export type T1020 = ZuordTest.Assert<ZuordTest.IsEqual<T1020S, T1020E>>;

type T1020S = Zuord.ImposeLoose<string, undefined, "test">;

type T1020E = "test";

/**
 * Loose mode with primitive base:
 * Patch is `null`, should return patch
 */
export type T1030 = ZuordTest.Assert<ZuordTest.IsEqual<T1030S, T1030E>>;

type T1030S = Zuord.ImposeLoose<string, null, "test">;

type T1030E = null;

/**
 * Loose mode with primitive base:
 * Patch is exact general primitive, should return patch
 */
export type T1040 = ZuordTest.Assert<ZuordTest.IsEqual<T1040S, T1040E>>;

type T1040S = Zuord.ImposeLoose<string, string, "test">;

type T1040E = string;