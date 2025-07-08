import { ZuordUtil } from "./_alias.types";


// EXTRACT

type Extract<TSource, TBase> = TSource extends any ? ([ZuordUtil.Is<TSource, TBase>] extends [true] ? TSource : never) : never;

export type { Extract as ZuordExtract };