import { Zuord, ZuordUtil } from "@";
import { ZuordTest } from "@/test";

/**
 * Checks if imposing a patch type onto a base type results in all of the expected outcomes.
 *
 * @param TBase - The base type to impose upon.
 * @param TCurrent - The current type, defaults to TBase.
 * @param TComparisons - An array of comparisons to validate the imposed result.
 * @returns `true` if all imposed results match the expected values; otherwise, `false`.
 */
export type ImposeLooseComparison<TBase, TCurrent extends TBase = TBase, TComparisons extends ZuordTest.Comparison[] = []> = ZuordUtil.HasAllTrue<{
    [K in keyof TComparisons]: 
        ZuordTest.IsEqual<Zuord.ImposeLoose<TBase, TComparisons[K]["type"], TCurrent>, TComparisons[K]["expected"]
    >
}> extends true ? true : false;

//

/**
 * Test-100: The expected result is the patch when the base and current types are `never`.
 * 
 * Each patch type should impose to itself (identity), since nothing exists to override them.
 *
 * base: `never` – patch `*`  – current `never`
 * @returns `ImposeLoose<never, *, never> === TPatch`
 */
export type ImposeLooseT100 = ZuordTest.Assert<ImposeLooseComparison<never, never, ZuordTest.ComparisonSelfList<[
    never, undefined, null, void, any, boolean, string, number, bigint, symbol, object,
    [], ["hello", "world", string, number],
    {}, { hello: { world: string } },
]>>>;

/**
 * Test-101: The expected result is the patch when the base type is `undefined` and current type is `never`.
 * 
 * Each patch type should impose to itself (identity), since nothing exists to override them.
 *
 * base: `undefined` – patch `*`  – current `never`
 * @returns `ImposeLoose<undefined, *, never> === TPatch`
 */
export type ImposeLooseT101 = ZuordTest.Assert<ImposeLooseComparison<undefined, never, ZuordTest.ComparisonSelfList<[
    never, undefined, null, void, any, boolean, string, number, bigint, symbol, object,
    [], ["hello", "world", string, number],
    {}, { hello: { world: string } },
]>>>;

/**
 * Test-102: The expected result is the patch (except when it is `never`) when the base and current types are `undefined`.
 * 
 * Each patch type (except `never`) should impose to itself (identity), since nothing exists to override it.
 * 
 * If the patch type is `never`, then the result must be the current type `undefined`.
 *
 * base: `undefined` – patch: any – current: `undefined`
 * @returns `ImposeLoose<undefined, *, undefined> === TPatch extends never ? TCurrent : TPatch`
 */
export type ImposeLooseT102 = ZuordTest.Assert<ImposeLooseComparison<undefined, undefined, [...ZuordTest.ComparisonSelfList<[
    undefined, null, void, any, boolean, string, number, bigint, symbol, object,
    [], ["hello", "world", string, number],
    {}, { hello: { world: string } },
]>, { type: never, expected: undefined}]>>;