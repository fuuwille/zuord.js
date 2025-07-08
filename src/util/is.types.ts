import { ZuordType } from "@/type/_alias.types";

type Is<TSource, TBase> = [TSource] extends [TBase] ? true : false;

type IsAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRest] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsAny<TRest, TBase>
) : false;

type IsEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRest] ? (
    [Is<TSource, TBase>] extends [true] ? (TRest extends readonly [infer __f, ...infer __r] ? IsEvery<TRest, TBase> : true) : false
) : false;

type IsToAny<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRest] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsToAny<TSource, TRest>
) : false;

type IsToEvery<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRest] ? (
    [Is<TSource, TBase>] extends [true] ? (TRest extends readonly [infer __f, ...infer __r] ? IsToEvery<TSource, TRest> : true) : false
) : false;

type IsAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRest] ? (
    IsToAny<TSource, TBases> extends true ? true : IsAnyToAny<TRest, TBases>
) : false;

type IsAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRest] ? (
    IsToEvery<TSource, TBases> extends true ? true : IsAnyToEvery<TRest, TBases>
) : false;

type IsEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRest] ? (
    IsToAny<TSource, TBases> extends true ? (TRest extends readonly [infer _f, ...infer _r] ? IsEveryToAny<TRest, TBases> : true) : false
) : false;

type IsEveryToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRest] ? (
    IsToEvery<TSource, TBases> extends true ? (TRest extends readonly [infer _f, ...infer _r] ? IsEveryToEvery<TRest, TBases> : true) : false
) : false;

export type { Is as ZuordIs };

export type { IsAny as ZuordIsAny };

export type { IsEvery as ZuordIsEvery };

export type { IsToAny as ZuordIsToAny };

export type { IsToEvery as ZuordIsToEvery };

export type { IsAnyToAny as ZuordIsAnyToAny };

export type { IsAnyToEvery as ZuordIsAnyToEvery };

export type { IsEveryToAny as ZuordIsEveryToAny };

export type { IsEveryToEvery as ZuordIsEveryToEvery };


type Test1 = IsAny<[1, 2, 3], 3>;   // true
type Test2 = IsAny<[4, 5, 6], 1>;   // false
type Test3 = IsAny<[], 4>;          // false (boş tuple)

type Test4 = IsEvery<[1, 2, 3], 3>; // false
type Test5 = IsEvery<[3, 3, 3], 3>; // true
type Test6 = IsEvery<[], 3>;        // false (boş tuple)

type Test7 = IsToAny<1, [1, 2, 3]>; // true
type Test8 = IsToAny<4, [1, 2, 3]>; // false
type Test9 = IsToAny<1, []>;        // false (boş tuple)

type Test10 = IsToEvery<{ hello: string, world: string }, [{ hello: string }, { world: string} ]>; // true
type Test11 = IsToEvery<{ hello: string, world: string }, [{ hello: string }, { world: number} ]>; // false
type Test12 = IsToEvery<{ hello: string, world: string }, []>; // false (boş tuple)

type Test13 = IsAnyToAny<[1, 2, 3], [1, 2, 3]>; // true
type Test14 = IsAnyToAny<[1, 2, 3], [2, 3, 4]>; // true
type Test15 = IsAnyToAny<[1, 2, 3], [4, 5, 6]>; // false
type Test16 = IsAnyToAny<[], [1, 2, 3]>;        // false (boş tuple)
type Test17 = IsAnyToAny<[1, 2, 3], []>;        // false (boş tuple)
type Test18 = IsAnyToAny<[], []>;               // false (boş tuple)

type Test19 = IsAnyToEvery<[{ hello: string }, { world: string}, { hello: string, world: string}], [{ hello: string }, { world: string} ]>;
type Test20 = IsAnyToEvery<[{ hello: string }, { world: number}, { hello: string, world: string}], [{ hello: string }, { world: number} ]>;
type Test21 = IsAnyToEvery<[], [{ hello: string }, { world: string} ]>; // false (boş tuple)