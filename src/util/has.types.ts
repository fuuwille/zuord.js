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


// HAS TO ANY

type HasToAny<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasToAny<TSource, TRestBases>
) : false;

export type { HasToAny as ZuordHasToAny };


// HAS TO EVERY

type HasToEvery<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    [Has<TSource, TBase>] extends [true] ? (TRestBases extends ZuordType.EmptyArray ? true : HasToEvery<TSource, TRestBases>) : false
) : false;

export type { HasToEvery as ZuordHasToEvery };