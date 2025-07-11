import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal";


// EXCLUDE

type Exclude<TSource, TBase> = InternalZuordUtil.Exclude<TSource, TBase>;

export type { Exclude as ZuordExclude };


// EXCLUDE EACH

type ExcludeEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordUtil.ExcludeEach<TSource, TBases>;

export type { ExcludeEach as ZuordExcludeEach };


// EXCLUDE EQ

type ExcludeEq<TSource, TBase> = InternalZuordUtil.ExcludeEq<TSource, TBase>;

export type { ExcludeEq as ZuordExcludeEq };


// EXCLUDE EQ EACH

type ExcludeEqEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordUtil.ExcludeEqEach<TSource, TBases>;

export type { ExcludeEqEach as ZuordExcludeEqEach };