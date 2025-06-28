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
export type ImposeLooseComparison<TBase, TCurrent extends TBase, TComparisons extends ZuordTest.Comparison[] = []> = ZuordUtil.HasAllTrue<{
    [K in keyof TComparisons]: 
        ZuordTest.IsEqual<Zuord.ImposeLoose<TBase, TComparisons[K]["type"], TCurrent>, TComparisons[K]["expected"]
    >
}> extends true ? true : false;

//

/**
 * base: `never` – patch `all`  – current `never`
 * @returns `patch self`
 */
export type ImposeLooseT100 = ZuordTest.Assert<ImposeLooseComparison<never, never, [
    { type: never, expected: never },
    { type: undefined, expected: undefined },
    { type: null, expected: null },
    { type: void, expected: void },
    { type: boolean, expected: boolean },
    { type: string, expected: string },
    { type: number, expected: number },
    { type: bigint, expected: bigint },
    { type: symbol, expected: symbol },
    { type: object, expected: object },
    { type: [], expected: [] },
    { type: {}, expected: {} },
]>>;