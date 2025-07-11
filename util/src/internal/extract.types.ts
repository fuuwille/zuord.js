import { InternalZuordUtil } from ".";


// EXTRACT

type Extract<TSource, TBase> = TSource extends any ? (
    [InternalZuordUtil.Is<TSource, TBase>] extends [true] ? TSource : never
) : never;

export type { Extract as ZuordExtract };