import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from ".";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? InternalZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasAny<TRestSources, TBase>
) : false;

export type { HasAny as ZuordHasAny };


// HAS EVERY

type HasEvery<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : HasEvery<TRestSources, TBase>) : false
) : false;

export type { HasEvery as ZuordHasEvery };


// HAS SOME

type HasSome<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasSome<TSource, TRestBases>
) : false;

export type { HasSome as ZuordHasSome };


// HAS EACH

type HasEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : HasEach<TSource, TRestBases>) : false
) : false;

export type { HasEach as ZuordHasEach };


// HAS ANY SOME

type HasAnySome<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasSome<TSource, TBases>] extends [true] ? true : HasAnySome<TRestSources, TBases>
) : false;

export type { HasAnySome as ZuordHasAnySome };


// HAS ANY EACH

type HasAnyEach<TSources, TBases> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [HasEach<TSource, TBases>] extends [true] ? true : HasAnyEach<TRestSources, TBases>
) : false;

export type { HasAnyEach as ZuordHasAnyEach };