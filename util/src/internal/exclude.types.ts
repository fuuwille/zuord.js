import { InternalZuordUtil } from ".";


// EXCLUDE

type Exclude<TSource, TBase> = TSource extends any ? (
    [InternalZuordUtil.Is<TSource, TBase>] extends [false] ? TSource : never
) : never;

export type { Exclude as ZuordExclude };