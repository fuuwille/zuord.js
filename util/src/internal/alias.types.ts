import { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqSome, ZuordEqAnySome, ZuordEqEverySome } from "./eq.types";
import { ZuordIs, ZuordIsAny, ZuordIsEvery } from "./is.types";

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
}