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
 * Test-100: The expected result is the patch when the base and current types are `never`.
 * 
 * Each patch type should impose to itself (identity), since nothing exists to override them.
 *
 * base: `never` – patch `all`  – current `never`
 * @returns `ImposeLoose<never, T, never> === T`
 */
export type ImposeLooseT100 = ZuordTest.Assert<ImposeLooseComparison<never, never, [
    { type: never, expected: never },
    { type: undefined, expected: undefined },
    { type: null, expected: null },
    { type: void, expected: void },
    { type: any, expected: any },
    { type: boolean, expected: boolean },
    { type: string, expected: string },
    { type: number, expected: number },
    { type: bigint, expected: bigint },
    { type: symbol, expected: symbol },
    { type: object, expected: object },
    { type: [], expected: [] },
    { type: ["hello", "world", string, number], expected: ["hello", "world", string, number] },
    { type: {}, expected: {} },
    { type: { hello: { world: string }}, expected: { hello: { world: string } } },
    { type: null | void | boolean | string | number | bigint | symbol | object | {} | [], expected: null | void | boolean | string | number | bigint | symbol | object | {} | [] },
]>>;

/**
 * Test-101: The expected result is the patch when the base and current types are `undefined`.
 * 
 * Each patch type should impose to itself (identity), since nothing exists to override them.
 *
 * base: `undefined` – patch `all`  – current `undefined`
 * @returns `ImposeLoose<undefined, T, undefined> === T`
 */
export type ImposeLooseT101 = ZuordTest.Assert<ImposeLooseComparison<undefined, undefined, [
    { type: never, expected: undefined },
    { type: undefined, expected: undefined },
    { type: null, expected: null },
    { type: void, expected: void },
    { type: any, expected: any },
    { type: boolean, expected: boolean },
    { type: string, expected: string },
    { type: number, expected: number },
    { type: bigint, expected: bigint },
    { type: symbol, expected: symbol },
    { type: object, expected: object },
    { type: [], expected: [] },
    { type: ["hello", "world", string, number], expected: ["hello", "world", string, number] },
    { type: {}, expected: {} },
    { type: { hello: { world: string }}, expected: { hello: { world: string } } }
]>>;