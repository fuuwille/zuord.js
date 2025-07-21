import { ZuordType } from "../../packages/type/src";
import { InternalZuordTrait } from "./internal";


// HAS

type Has<TSource, TBase> = InternalZuordTrait.Has<TSource, TBase>;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources extends ZuordType.Tuple, TBase> = InternalZuordTrait.HasAny<TSources, TBase>;

export type { HasAny as ZuordHasAny };


// HAS EVERY

type HasEvery<TSources extends ZuordType.Tuple, TBase> = InternalZuordTrait.HasEvery<TSources, TBase>;

export type { HasEvery as ZuordHasEvery };


// HAS SOME

type HasSome<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasSome<TSource, TBases>;

export type { HasSome as ZuordHasSome };


// HAS EACH

type HasEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasEach<TSource, TBases>;

export type { HasEach as ZuordHasEach };


// HAS ANY SOME

type HasAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasAnySome<TSources, TBases>;

export type { HasAnySome as ZuordHasAnySome };


// HAS ANY EACH

type HasAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasAnyEach<TSources, TBases>;

export type { HasAnyEach as ZuordHasAnyEach };


// HAS EVERY SOME

type HasEverySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasEverySome<TSources, TBases>;

export type { HasEverySome as ZuordHasEverySome };


// HAS EVERY EACH

type HasEveryEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordTrait.HasEveryEach<TSources, TBases>;

export type { HasEveryEach as ZuordHasEveryEach };