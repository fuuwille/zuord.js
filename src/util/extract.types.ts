import { ZuordType } from "@/type/_alias.types";
import { ZuordUtil } from "./_alias.types";


// EXTRACT

type Extract<TSource, TBase> = TSource extends any ? ([ZuordUtil.Is<TSource, TBase>] extends [true] ? TSource : never) : never;

export type { Extract as ZuordExtract };


// EXTRACT EACH

type ExtractEach<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExtractEach<Extract<TSource, TBase>, TRestBases>
) : TSource;

export type { ExtractEach as ZuordExtractEach };


// EXTRACT EQ

type ExtractEq<TSource, TBase> = TSource extends any ? ([ZuordUtil.Eq<TSource, TBase>] extends [true] ? TSource : never) : never;

export type { ExtractEq as ZuordExtractEq };