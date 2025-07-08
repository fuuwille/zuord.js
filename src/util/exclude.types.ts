import { ZuordUtil } from "./_alias.types";


// EXCLUDE

type Exclude<TSource, TBase> = TSource extends any ? ([ZuordUtil.Is<TSource, TBase>] extends [false] ? TSource : never) : never;

export type { Exclude as ZuordExclude };


// EXCLUDE EQ

type ExcludeEq<TSource, TBase> = TSource extends any ? ([ZuordUtil.Eq<TSource, TBase>] extends [false] ? TSource : never) : never;

export type { ExcludeEq as ZuordExcludeEq };