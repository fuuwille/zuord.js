import { ZuordType } from "@/type/_alias.types";
import type { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqToAny, ZuordEqAnyToAny, ZuordEqEveryToAny } from "./eq.types";
import type { ZuordIs, ZuordIsAny, ZuordIsEvery, ZuordIsToAny, ZuordIsToEvery, ZuordIsAnyToAny } from "./is.types";
import { ZuordValueAt } from "./value.types";
import { ZuordUnionOf } from "./union.types";
import { ZuordInstanceOf, ZuordInstanceTuple } from "./instance.types";
import { ZuordArrayDepth, ZuordArrayIn } from "./array.types";

export namespace ZuordUtil {

    // EQ

    export type Eq<T1, T2> = ZuordEq<T1, T2>;

    export type EqAny<U1 extends ZuordType.Array, T2> = ZuordEqAny<U1, T2>;

    export type EqEvery<U1 extends ZuordType.Array, T2> = ZuordEqEvery<U1, T2>;

    export type EqToAny<T1, U2 extends ZuordType.Array> = ZuordEqToAny<T1, U2>;

    export type EqAnyToAny<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = ZuordEqAnyToAny<U1, U2>;

    export type EqEveryToAny<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = ZuordEqEveryToAny<U1, U2>;


    // IS

    export type Is<TSource, TBase> = ZuordIs<TSource, TBase>;

    export type IsAny<TSources extends ZuordType.Array, TBase> = ZuordIsAny<TSources, TBase>;

    export type IsEvery<TSources extends ZuordType.Array, TBase> = ZuordIsEvery<TSources, TBase>;

    export type IsToAny<TSource, TBases extends ZuordType.Array> = ZuordIsToAny<TSource, TBases>;

    export type IsToEvery<TSource, TBases extends ZuordType.Array> = ZuordIsToEvery<TSource, TBases>;

    export type IsAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsAnyToAny<TSources, TBases>;

    
    // VALUE

    export type ValueAt<T, K extends PropertyKey> = ZuordValueAt<T, K>;

    // UNION

    export type UnionOf<M extends readonly any[]> = ZuordUnionOf<M>;


    // INSTANCE

    export type InstanceOf<T> = ZuordInstanceOf<T>;
    
    export type InstanceTuple<T> = ZuordInstanceTuple<T>;


    // ARRAY

    export type ArrayIn<T> = ZuordArrayIn<T>;
    
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
}