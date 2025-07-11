import { ZuordType } from "@zuord/type";
import type { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqSome, ZuordEqAnySome, ZuordEqEverySome } from "./eq.types";
import type { ZuordIs, ZuordIsAny, ZuordIsEvery, ZuordIsSome, ZuordIsEach, ZuordIsAnySome, ZuordIsAnyEach, ZuordIsEverySome, ZuordIsEveryEach } from "./is.types";
import type { ZuordHas, ZuordHasAny, ZuordHasEvery, ZuordHasSome, ZuordHasEach, ZuordHasAnySome, ZuordHasAnyEach, ZuordHasEverySome, ZuordHasEveryEach } from "./has.types";
import type { ZuordExclude, ZuordExcludeEach, ZuordExcludeEq, ZuordExcludeEqEach } from "./exclude.types";
import type { ZuordExtract, ZuordExtractEach, ZuordExtractEq, ZuordExtractEqEach } from "./extract.types";

export namespace ZuordUtil {

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

    export type IsAnySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsAnySome<TSources, TBases>;

    export type IsAnyEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsAnyEach<TSources, TBases>;

    export type IsEverySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsEverySome<TSources, TBases>;
    
    export type IsEveryEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsEveryEach<TSources, TBases>;


    // HAS

    export type Has<TSource, TBase> = ZuordHas<TSource, TBase>;

    export type HasAny<TSources extends ZuordType.Array, TBase> = ZuordHasAny<TSources, TBase>;

    export type HasEvery<TSources extends ZuordType.Array, TBase> = ZuordHasEvery<TSources, TBase>;

    export type HasSome<TSource, TBases extends ZuordType.Array> = ZuordHasSome<TSource, TBases>;

    export type HasEach<TSource, TBases extends ZuordType.Array> = ZuordHasEach<TSource, TBases>;

    export type HasAnySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasAnySome<TSources, TBases>;

    export type HasAnyEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasAnyEach<TSources, TBases>;

    export type HasEverySome<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasEverySome<TSources, TBases>;

    export type HasEveryEach<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasEveryEach<TSources, TBases>;


    // EXCLUDE

    export type Exclude<TSource, TBase> = ZuordExclude<TSource, TBase>;

    export type ExcludeEach<TSource, TBases extends ZuordType.Array> = ZuordExcludeEach<TSource, TBases>;

    export type ExcludeEq<TSource, TBase> = ZuordExcludeEq<TSource, TBase>;

    export type ExcludeEqEach<TSource, TBases extends ZuordType.Array> = ZuordExcludeEqEach<TSource, TBases>;


    // EXTRACT

    export type Extract<TSource, TBase> = ZuordExtract<TSource, TBase>;

    export type ExtractEach<TSource, TBases extends ZuordType.Array> = ZuordExtractEach<TSource, TBases>;

    export type ExtractEq<TSource, TBase> = ZuordExtractEq<TSource, TBase>;

    export type ExtractEqEach<TSource, TBases extends ZuordType.Array> = ZuordExtractEqEach<TSource, TBases>;
}