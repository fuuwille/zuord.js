import { ZuordType } from "@/type/_alias.types";
import { ZuordUtil } from "./_alias.types";


// HAS

type Has<TSource, TBase> = true extends (TSource extends any ? ZuordUtil.Is<TSource, TBase> : never) ? true : false;

export type { Has as ZuordHas };


// HAS ANY

type HasAny<TSources extends ZuordType.Array, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Has<TSource, TBase>] extends [true] ? true : HasAny<TRestSources, TBase>
) : false;

export type { HasAny as ZuordHasAny };