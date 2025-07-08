import { ZuordType } from "@/type/_alias.types";

type Is<TSource, TBase> = [TSource] extends [TBase] ? true : false;

type IsAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer TRest] ? (
    [Is<TCurrent, TBase>] extends [true] ? true : IsAny<TRest, TBase>
) : false;

type IsEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer TRest] ? (
    [Is<TCurrent, TBase>] extends [true] ? (TRest extends readonly [infer __f, ...infer __r] ? IsEvery<TRest, TBase> : true) : false
) : false;

type IsToAny<TSource, TBases extends ZuordType.Array> = TBases extends [infer TCurrent, ...infer TRest] ? (
    [Is<TSource, TCurrent>] extends [true] ? true : IsToAny<TSource, TRest>
) : false;

type IsToEvery<TSource, TBases extends ZuordType.Array> = TBases extends [infer TCurrent, ...infer TRest] ? (
    [Is<TSource, TCurrent>] extends [true] ? (TRest extends readonly [infer __f, ...infer __r] ? IsToEvery<TSource, TRest> : true) : false
) : false;

type IsAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TCurrent, ...infer TRest] ? (
    IsToAny<TCurrent, TBases> extends true ? true : IsAnyToAny<TRest, TBases>
) : false;

type IsAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TCurrent, ...infer TRest] ? (
    IsToEvery<TCurrent, TBases> extends true ? true : IsAnyToEvery<TRest, TBases>
) : false;

type IsEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = TSources extends [infer TCurrent, ...infer TRest] ? (
    IsToAny<TCurrent, TBases> extends true ? (TRest extends readonly [infer _f, ...infer _r] ? IsEveryToAny<TRest, TBases> : true) : false
) : false;

export type { Is as ZuordIs };

export type { IsAny as ZuordIsAny };

export type { IsEvery as ZuordIsEvery };

export type { IsToAny as ZuordIsToAny };

export type { IsToEvery as ZuordIsToEvery };

export type { IsAnyToAny as ZuordIsAnyToAny };

export type { IsAnyToEvery as ZuordIsAnyToEvery };

export type { IsEveryToAny as ZuordIsEveryToAny };