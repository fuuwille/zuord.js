import { Zuord } from "@";
import { ZuordTest } from "@/test";

/**
 * Checks if imposing a patch type onto a base type results in all of the expected outcomes.
 *
 * @param TBase - The base type to impose upon.
 * @param TCurrent - The current type, defaults to TBase.
 * @param TComparisons - An array of comparisons to validate the imposed result.
 * @returns `true` if all imposed results match the expected values; otherwise, `false`.
 */
export type ImposeLooseComparison<TBase, TCurrent extends TBase, TComparisons extends ZuordTest.Comparison[] = []> = ZuordUtil.HasAllTrue<{
    [K in keyof TComparisons]: 
        ZuordTest.IsEqual<Zuord.ImposeLoose<TBase, TComparisons[K]["type"], TCurrent>, TComparisons[K]["expected"]
    >
}> extends true ? true : false;

//

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

/**
 * base: `never` – patch `void` – current `never`
 * @returns `void`
 */
export type ImposeLoose104 = ZuordTest.Assert<ZuordTest.IsEqual<ImposeLoose104S, ImposeLoose104E>>;

type ImposeLoose104S = Zuord.ImposeLoose<never, void, never>;

type ImposeLoose104E = void;