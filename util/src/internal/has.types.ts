import { InternalZuordUtil } from ".";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? InternalZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };