import { ZuordUtil } from "./_alias.types";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? ZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };