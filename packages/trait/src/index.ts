import { ZuordType } from "../../type/src";
import type { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqSome, ZuordEqAnySome, ZuordEqEverySome } from "./eq.types";
import type { ZuordIs, ZuordIsAny, ZuordIsEvery, ZuordIsSome, ZuordIsEach, ZuordIsAnySome, ZuordIsAnyEach, ZuordIsEverySome, ZuordIsEveryEach } from "./is.types";
import type { ZuordHas, ZuordHasAny, ZuordHasEvery, ZuordHasSome, ZuordHasEach, ZuordHasAnySome, ZuordHasAnyEach, ZuordHasEverySome, ZuordHasEveryEach } from "./has.types";
import type { ZuordExclude, ZuordExcludeEach, ZuordExcludeEq, ZuordExcludeEqEach } from "./exclude.types";
import type { ZuordExtract, ZuordExtractEach, ZuordExtractEq, ZuordExtractEqEach } from "./extract.types";

export namespace ZuordTrait {

    // EQ

    export type Eq<T1, T2> = ZuordEq<T1, T2>;

    export type EqAny<U1 extends ZuordType.Tuple, T2> = ZuordEqAny<U1, T2>;

    export type EqEvery<U1 extends ZuordType.Tuple, T2> = ZuordEqEvery<U1, T2>;

    export type EqSome<T1, U2 extends ZuordType.Tuple> = ZuordEqSome<T1, U2>;

    export type EqAnySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = ZuordEqAnySome<U1, U2>;

    export type EqEverySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = ZuordEqEverySome<U1, U2>;


    // IS

    export type Is<TSource, TBase> = ZuordIs<TSource, TBase>;

    export type IsAny<TSources extends ZuordType.Tuple, TBase> = ZuordIsAny<TSources, TBase>;

    export type IsEvery<TSources extends ZuordType.Tuple, TBase> = ZuordIsEvery<TSources, TBase>;

    export type IsSome<TSource, TBases extends ZuordType.Tuple> = ZuordIsSome<TSource, TBases>;

    export type IsEach<TSource, TBases extends ZuordType.Tuple> = ZuordIsEach<TSource, TBases>;

    export type IsAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordIsAnySome<TSources, TBases>;

    export type IsAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordIsAnyEach<TSources, TBases>;

    export type IsEverySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordIsEverySome<TSources, TBases>;
    
    export type IsEveryEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordIsEveryEach<TSources, TBases>;


    // HAS

    export type Has<TSource, TBase> = ZuordHas<TSource, TBase>;

    export type HasAny<TSources extends ZuordType.Tuple, TBase> = ZuordHasAny<TSources, TBase>;

    export type HasEvery<TSources extends ZuordType.Tuple, TBase> = ZuordHasEvery<TSources, TBase>;

    export type HasSome<TSource, TBases extends ZuordType.Tuple> = ZuordHasSome<TSource, TBases>;

    export type HasEach<TSource, TBases extends ZuordType.Tuple> = ZuordHasEach<TSource, TBases>;

    export type HasAnySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordHasAnySome<TSources, TBases>;

    export type HasAnyEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordHasAnyEach<TSources, TBases>;

    export type HasEverySome<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordHasEverySome<TSources, TBases>;

    export type HasEveryEach<TSources extends ZuordType.Tuple, TBases extends ZuordType.Tuple> = ZuordHasEveryEach<TSources, TBases>;


    // EXCLUDE

    export type Exclude<TSource, TBase> = ZuordExclude<TSource, TBase>;

    export type ExcludeEach<TSource, TBases extends ZuordType.Tuple> = ZuordExcludeEach<TSource, TBases>;

    export type ExcludeEq<TSource, TBase> = ZuordExcludeEq<TSource, TBase>;

    export type ExcludeEqEach<TSource, TBases extends ZuordType.Tuple> = ZuordExcludeEqEach<TSource, TBases>;


    // EXTRACT

    export type Extract<TSource, TBase> = ZuordExtract<TSource, TBase>;

    export type ExtractEach<TSource, TBases extends ZuordType.Tuple> = ZuordExtractEach<TSource, TBases>;

    export type ExtractEq<TSource, TBase> = ZuordExtractEq<TSource, TBase>;

    export type ExtractEqEach<TSource, TBases extends ZuordType.Tuple> = ZuordExtractEqEach<TSource, TBases>;
}