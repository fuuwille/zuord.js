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