import { ZuordType } from "@/type/_alias.types";

type Is<TSource, TBase> = [TSource] extends [TBase] ? true : false;

type IsAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer TRest] ? (
    [Is<TCurrent, TBase>] extends [true] ? true : IsAny<TRest, TBase>
) : false;

type IsEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer TRest] ? (
    [Is<TCurrent, TBase>] extends [true] ? (TRest extends readonly [infer __f, ...infer __r] ? IsEvery<TRest, TBase> : true) : false
) : false;

export type { Is as ZuordIs };

export type { IsAny as ZuordIsAny };

export type { IsEvery as ZuordIsEvery };