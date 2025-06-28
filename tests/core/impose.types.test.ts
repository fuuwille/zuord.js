import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * mode: `loose` – base: `never` – patch `never` – current `never`
 * @returns `never`
 */
export type ImposeLoose100 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose100S, ImposeLoose100E>>;

type ImposeLoose100S = Zuord.ImposeLoose<never, never, never>;

type ImposeLoose100E = never;