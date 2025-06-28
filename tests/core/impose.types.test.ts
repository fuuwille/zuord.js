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

/**
 * base: `never` – patch `null` – current `never`
 * @returns `null`
 */
export type ImposeLoose102 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose102S, ImposeLoose102E>>;

type ImposeLoose102S = Zuord.ImposeLoose<never, null, never>;

type ImposeLoose102E = null;

/**
 * base: `never` – patch `boolean` – current `never`
 * @returns `boolean`
 */
export type ImposeLoose103 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose103S, ImposeLoose103E>>;

type ImposeLoose103S = Zuord.ImposeLoose<never, boolean, never>;

type ImposeLoose103E = boolean;