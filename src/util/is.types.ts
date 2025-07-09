import { ZuordType } from "@/type/_alias.types";


// IS

type Is<TSource, TBase> = [TSource] extends [TBase] ? (
    [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
) : false;

export type { Is as ZuordIs };


// IS ANY

type IsAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsAny<TRestSources, TBase>
) : false;

export type { IsAny as ZuordIsAny };


// IS EVERY

type IsEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Is<TSource, TBase>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEvery<TRestSources, TBase>) : false
) : false;

export type { IsEvery as ZuordIsEvery };


// IS SOME

type IsSome<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsSome<TSource, TRestBases>
) : false;

export type { IsSome as ZuordIsSome };


// IS TO EVERY

type IsToEvery<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Is<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : IsToEvery<TSource, TRestBases>) : false
) : false;

export type { IsToEvery as ZuordIsToEvery };


// IS ANY TO ANY

type IsAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    IsSome<TSource, TBases> extends true ? true : IsAnyToAny<TRestSources, TBases>
) : false;

export type { IsAnyToAny as ZuordIsAnyToAny };


// IS ANY TO EVERY

type IsAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    IsToEvery<TSource, TBases> extends true ? true : IsAnyToEvery<TRestSources, TBases>
) : false;

export type { IsAnyToEvery as ZuordIsAnyToEvery };


// IS EVERY TO ANY

type IsEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    IsSome<TSource, TBases> extends true ? (TRestSources extends ZuordType.EmptyArray ? true : IsEveryToAny<TRestSources, TBases>) : false
) : false;

export type { IsEveryToAny as ZuordIsEveryToAny };


// IS EVERY TO EVERY

type IsEveryToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    IsToEvery<TSource, TBases> extends true ? (TRestSources extends ZuordType.EmptyArray ? true : IsEveryToEvery<TRestSources, TBases>) : false
) : false;

export type { IsEveryToEvery as ZuordIsEveryToEvery };


//


type Test1 = IsAny<[1, 2, 3], 3>;   // true
type Test2 = IsAny<[4, 5, 6], 1>;   // false
type Test3 = IsAny<[], 4>;          // false (boş tuple)

type Test4 = IsEvery<[1, 2, 3], 3>; // false
type Test5 = IsEvery<[3, 3, 3], 3>; // true
type Test6 = IsEvery<[], 3>;        // false (boş tuple)

type Test7 = IsSome<1, [1, 2, 3]>; // true
type Test8 = IsSome<4, [1, 2, 3]>; // false
type Test9 = IsSome<1, []>;        // false (boş tuple)

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