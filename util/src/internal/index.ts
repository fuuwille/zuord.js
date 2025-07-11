import { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqSome, ZuordEqAnySome, ZuordEqEverySome } from "./eq.types";
import { ZuordIs, ZuordIsAny, ZuordIsEvery, ZuordIsSome, ZuordIsEach, ZuordIsAnySome, ZuordIsAnyEach, ZuordIsEverySome, ZuordIsEveryEach } from "./is.types";
import { ZuordHas, ZuordHasAny, ZuordHasEvery, ZuordHasSome } from "./has.types";

export namespace InternalZuordUtil {

    // EQ
    
    export type Eq<T1, T2> = ZuordEq<T1, T2>;

    export type EqAny<U1, T2> = ZuordEqAny<U1, T2>;

    export type EqEvery<U1, T2> = ZuordEqEvery<U1, T2>;

    export type EqSome<T1, U2> = ZuordEqSome<T1, U2>;

    export type EqAnySome<U1, U2> = ZuordEqAnySome<U1, U2>;

    export type EqEverySome<U1, U2> = ZuordEqEverySome<U1, U2>;


    // IS

    export type Is<TSource, TBase> = ZuordIs<TSource, TBase>;

    export type IsAny<TSources, TBase> = ZuordIsAny<TSources, TBase>;

    export type IsEvery<TSources, TBase> = ZuordIsEvery<TSources, TBase>;

    export type IsSome<TSource, TBases> = ZuordIsSome<TSource, TBases>;

    export type IsEach<TSource, TBases> = ZuordIsEach<TSource, TBases>;

    export type IsAnySome<TSources, TBases> = ZuordIsAnySome<TSources, TBases>;

    export type IsAnyEach<TSources, TBases> = ZuordIsAnyEach<TSources, TBases>;

    export type IsEverySome<TSources, TBases> = ZuordIsEverySome<TSources, TBases>;

    export type IsEveryEach<TSources, TBases> = ZuordIsEveryEach<TSources, TBases>;


    // HAS

    export type Has<TSource, TBase> = ZuordHas<TSource, TBase>;

    export type HasAny<TSources, TBase> = ZuordHasAny<TSources, TBase>;

    export type HasEvery<TSources, TBase> = ZuordHasEvery<TSources, TBase>;

    export type HasSome<TSource, TBases> = ZuordHasSome<TSource, TBases>;
}