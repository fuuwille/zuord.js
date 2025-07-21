import { ZuordType } from "../../packages/type/src";
import { InternalZuordTrait } from "./internal";


// IS

type Is<TSource, TBase> = InternalZuordTrait.Is<TSource, TBase>;

export type { Is as ZuordIs };


// IS ANY

type IsAny<TSources extends ZuordType.Tuple, TBase> = InternalZuordTrait.IsAny<TSources, TBase>;

export type { IsAny as ZuordIsAny };


// IS EVERY

type IsEvery<TSources extends ZuordType.Tuple, TBase> = InternalZuordTrait.IsEvery<TSources, TBase>;

export type { IsEvery as ZuordIsEvery };


// IS SOME

type IsSome<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsSome<TSource, TBases>;

export type { IsSome as ZuordIsSome };


// IS EACH

type IsEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsEach<TSource, TBases>;

export type { IsEach as ZuordIsEach };


// IS ANY SOME

type IsAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsAnySome<TSources, TBases>;

export type { IsAnySome as ZuordIsAnySome };


// IS ANY EACH

type IsAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsAnyEach<TSources, TBases>;

export type { IsAnyEach as ZuordIsAnyEach };


// IS EVERY SOME

type IsEverySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsEverySome<TSources, TBases>;

export type { IsEverySome as ZuordIsEverySome };


// IS EVERY EACH

type IsEveryEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.IsEveryEach<TSources, TBases>;

export type { IsEveryEach as ZuordIsEveryEach };