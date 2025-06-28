import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * base: `never` – patch `never` – current `never`
 * @returns `never`
 */
export type ImposeLoose100 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose100S, ImposeLoose100E>>;

type ImposeLoose100S = Zuord.ImposeLoose<never, never, never>;

type ImposeLoose100E = never;

/**
 * base: `never` – patch `undefined` – current `never`
 * @returns `undefined`
 */
export type ImposeLoose101 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose101S, ImposeLoose101E>>;

type ImposeLoose101S = Zuord.ImposeLoose<never, undefined, never>;

type ImposeLoose101E = undefined;