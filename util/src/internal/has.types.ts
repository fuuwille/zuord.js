import { InternalZuordUtil } from ".";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? InternalZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasAny<TRestSources, TBase>
) : false;

export type { HasAny as ZuordHasAny };