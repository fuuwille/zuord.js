import { ZuordType } from "@/type/_alias.types";
import { ZuordUtil } from "./_alias.types";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? ZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasAny<TRestSources, TBase>
) : false;

export type { HasAny as ZuordHasAny };


// HAS EVERY

type HasEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestSources extends ZuordType.EmptyArray ? true : HasEvery<TRestSources, TBase>) : false
) : false;

export type { HasEvery as ZuordHasEvery };


// HAS SOME

type HasSome<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasSome<TSource, TRestBases>
) : false;

export type { HasSome as ZuordHasSome };


// HAS TO EVERY

type HasToEvery<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : HasToEvery<TSource, TRestBases>) : false
) : false;

export type { HasToEvery as ZuordHasToEvery };


// HAS ANY TO ANY

type HasAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    HasSome<TSource, TBases> extends true ? true : HasAnyToAny<TRestSources, TBases>
) : false;

export type { HasAnyToAny as ZuordHasAnyToAny };


// HAS ANY TO EVERY

type HasAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    HasToEvery<TSource, TBases> extends true ? true : HasAnyToEvery<TRestSources, TBases>
) : false;

export type { HasAnyToEvery as ZuordHasAnyToEvery };


// HAS EVERY TO ANY

type HasEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    HasSome<TSource, TBases> extends true ? (TRestSources extends ZuordType.EmptyArray ? true : HasEveryToAny<TRestSources, TBases>) : false
) : false;

export type { HasEveryToAny as ZuordHasEveryToAny };


// HAS EVERY TO EVERY

type HasEveryToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TSource, ...infer TRestSources] ? (
    HasToEvery<TSource, TBases> extends true ? (TRestSources extends ZuordType.EmptyArray ? true : HasEveryToEvery<TRestSources, TBases>) : false
) : false;

export type { HasEveryToEvery as ZuordHasEveryToEvery };