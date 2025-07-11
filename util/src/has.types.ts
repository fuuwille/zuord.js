import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal";


// HAS

type Has<TSource, TBase> = InternalZuordUtil.Has<TSource, TBase>;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources extends ZuordType.Tuple, TBase> = InternalZuordUtil.HasAny<TSources, TBase>;

export type { HasAny as ZuordHasAny };


// HAS EVERY

type HasEvery<TSources extends ZuordType.Tuple, TBase> = InternalZuordUtil.HasEvery<TSources, TBase>;

export type { HasEvery as ZuordHasEvery };


// HAS SOME

type HasSome<TSource, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasSome<TSource, TBases>;

export type { HasSome as ZuordHasSome };


// HAS EACH

type HasEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasEach<TSource, TBases>;

export type { HasEach as ZuordHasEach };


// HAS ANY SOME

type HasAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasAnySome<TSources, TBases>;

export type { HasAnySome as ZuordHasAnySome };


// HAS ANY EACH

type HasAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasAnyEach<TSources, TBases>;

export type { HasAnyEach as ZuordHasAnyEach };


// HAS EVERY SOME

type HasEverySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasEverySome<TSources, TBases>;

export type { HasEverySome as ZuordHasEverySome };


// HAS EVERY EACH

type HasEveryEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = InternalZuordUtil.HasEveryEach<TSources, TBases>;

export type { HasEveryEach as ZuordHasEveryEach };