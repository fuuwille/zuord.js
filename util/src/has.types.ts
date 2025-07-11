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

type HasSome<TSource, TBases extends ZuordType.Array> = InternalZuordUtil.HasSome<TSource, TBases>;

export type { HasSome as ZuordHasSome };


// HAS EACH

type HasEach<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : HasEach<TSource, TRestBases>) : false
) : false;

export type { HasEach as ZuordHasEach };


// HAS ANY SOME

type HasAnySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasSome<TSource, TBases>] extends [true] ? true : HasAnySome<TRestSources, TBases>
) : false;

export type { HasAnySome as ZuordHasAnySome };


// HAS ANY EACH

type HasAnyEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasEach<TSource, TBases>] extends [true] ? true : HasAnyEach<TRestSources, TBases>
) : false;

export type { HasAnyEach as ZuordHasAnyEach };


// HAS EVERY SOME

type HasEverySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasSome<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : HasEverySome<TRestSources, TBases>) : false
) : false;

export type { HasEverySome as ZuordHasEverySome };


// HAS EVERY TO EVERY

type HasEveryEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasEach<TSource, TBases>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : HasEveryEach<TRestSources, TBases>) : false
) : false;

export type { HasEveryEach as ZuordHasEveryEach };