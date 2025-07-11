import { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqSome } from "./eq.types";

export namespace InternalZuordUtil {
    
    export type Eq<T1, T2> = ZuordEq<T1, T2>;

    export type EqAny<U1, T2> = ZuordEqAny<U1, T2>;

    export type EqEvery<U1, T2> = ZuordEqEvery<U1, T2>;

    export type EqSome<T1, U2> = ZuordEqSome<T1, U2>;
}