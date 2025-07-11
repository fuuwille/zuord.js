import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal/alias.types";


// IS

type Is<TSource, TBase> = InternalZuordUtil.Is<TSource, TBase>;

export type { Is as ZuordIs };


// IS ANY

type IsAny<TSources extends ZuordType.Tuple, TBase> = InternalZuordUtil.IsAny<TSources, TBase>;

export type { IsAny as ZuordIsAny };


// IS EVERY

type IsEvery<TSources extends ZuordType.Tuple, TBase> = InternalZuordUtil.IsEvery<TSources, TBase>;

export type { IsEvery as ZuordIsEvery };


// IS SOME

type IsSome<TSource, TBases extends ZuordType.Array> = InternalZuordUtil.IsSome<TSource, TBases>;

export type { IsSome as ZuordIsSome };


// IS EACH

type IsEach<TSource, TBases extends ZuordType.Array> = InternalZuordUtil.IsEach<TSource, TBases>;

export type { IsEach as ZuordIsEach };


// IS ANY SOME

type IsAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.IsAnySome<TSources, TBases>;

export type { IsAnySome as ZuordIsAnySome };


// IS ANY EACH

type IsAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.IsAnyEach<TSources, TBases>;

export type { IsAnyEach as ZuordIsAnyEach };


// IS EVERY SOME

type IsEverySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsSome<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEverySome<TRestSources, TBases>) : false
) : false;

export type { IsEverySome as ZuordIsEverySome };


// IS EVERY EACH

type IsEveryEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [IsEach<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : IsEveryEach<TRestSources, TBases>) : false
) : false;

export type { IsEveryEach as ZuordIsEveryEach };