import { ZuordUtil } from "./_alias.types";


// EXCLUDE

type Exclude<TSource, TBase> = TSource extends any ? ([ZuordUtil.Eq<TSource, TBase>] extends [false] ? TSource : never) : never;

export type { Exclude as ZuordExclude };