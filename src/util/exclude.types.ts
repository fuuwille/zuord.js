import { ZuordType } from "@/type/_alias.types";
import { ZuordUtil } from "./_alias.types";


// EXCLUDE

type Exclude<TSource, TBase> = TSource extends any ? ([ZuordUtil.Is<TSource, TBase>] extends [false] ? TSource : never) : never;

export type { Exclude as ZuordExclude };


// EXCLUDE EACH

type ExcludeEach<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExcludeEach<Exclude<TSource, TBase>, TRestBases>
) : TSource;

export type { ExcludeEach as ZuordExcludeEach };


// EXCLUDE EQ

type ExcludeEq<TSource, TBase> = TSource extends any ? ([ZuordUtil.Eq<TSource, TBase>] extends [false] ? TSource : never) : never;

export type { ExcludeEq as ZuordExcludeEq };


// EXCLUDE EQ EACH

type ExcludeEqEach<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExcludeEqEach<ExcludeEq<TSource, TBase>, TRestBases>
) : TSource;

export type { ExcludeEqEach as ZuordExcludeEqEach };