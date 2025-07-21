import { ZuordType } from "../../type/src";
import { InternalZuordTrait } from "./internal";


// EXCLUDE

type Exclude<TSource, TBase> = InternalZuordTrait.Exclude<TSource, TBase>;

export type { Exclude as ZuordExclude };


// EXCLUDE EACH

type ExcludeEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.ExcludeEach<TSource, TBases>;

export type { ExcludeEach as ZuordExcludeEach };


// EXCLUDE EQ

type ExcludeEq<TSource, TBase> = InternalZuordTrait.ExcludeEq<TSource, TBase>;

export type { ExcludeEq as ZuordExcludeEq };


// EXCLUDE EQ EACH

type ExcludeEqEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.ExcludeEqEach<TSource, TBases>;

export type { ExcludeEqEach as ZuordExcludeEqEach };