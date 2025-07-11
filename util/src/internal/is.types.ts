import { ZuordType } from "@zuord/type";


// IS

type Is<TSource, TBase> = [TSource] extends [TBase] ? (
    [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
) : false;

export type { Is as ZuordIs };


// IS ANY

type IsAny<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsAny<TRestSources, TBase>
) : false;

export type { IsAny as ZuordIsAny };


// IS EVERY

type IsEvery<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Is<TSource, TBase>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEvery<TRestSources, TBase>) : false
) : false;

export type { IsEvery as ZuordIsEvery };


// IS SOME

type IsSome<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsSome<TSource, TRestBases>
) : false;

export type { IsSome as ZuordIsSome };


// IS EACH

type IsEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Is<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : IsEach<TSource, TRestBases>) : false
) : false;

export type { IsEach as ZuordIsEach };


// IS ANY SOME

type IsAnySome<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsSome<TSource, TBases>] extends [true] ? true : IsAnySome<TRestSources, TBases>
) : false;

export type { IsAnySome as ZuordIsAnySome };


// IS ANY EACH

type IsAnyEach<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsEach<TSource, TBases>] extends [true] ? true : IsAnyEach<TRestSources, TBases>
) : false;

export type { IsAnyEach as ZuordIsAnyEach };


// IS EVERY SOME

type IsEverySome<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsSome<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEverySome<TRestSources, TBases>) : false
) : false;

export type { IsEverySome as ZuordIsEverySome };


// IS EVERY EACH

type IsEveryEach<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsEach<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEveryEach<TRestSources, TBases>) : false
) : false;

export type { IsEveryEach as ZuordIsEveryEach };