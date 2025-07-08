import { ZuordType } from "@/type/_alias.types";

type Is<TSource, TBase> = [TSource] extends [TBase] ? true : false;

type IsAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer Rest] ? (
    Is<TCurrent, TBase> extends true ? true : IsAny<Rest, TBase>
) : false;

type IsEvery<TSources extends ZuordType.Array, TBase> = TSources extends [infer TCurrent, ...infer Rest] ? (
    [Is<TCurrent, TBase>] extends [true] ? (Rest extends readonly [infer __f, ...infer __r] ? IsEvery<Rest, TBase> : true) : false
) : false;

export type { Is as ZuordIs };

export type { IsAny as ZuordIsAny };

export type { IsEvery as ZuordIsEvery };