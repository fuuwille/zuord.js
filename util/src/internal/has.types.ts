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