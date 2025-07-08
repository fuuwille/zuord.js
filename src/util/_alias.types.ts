import { ZuordType } from "@/type/_alias.types";
import type { ZuordEq, ZuordEqAny, ZuordEqToAny } from "./eq.types";
import { ZuordValueAt } from "./value.types";
import { ZuordUnionOf } from "./union.types";
import { ZuordInstanceOf, ZuordInstanceTuple } from "./instance.types";
import { ZuordArrayDepth, ZuordArrayIn } from "./array.types";

export namespace ZuordUtil {

    // EQ

    export type Eq<T1, T2> = ZuordEq<T1, T2>;

    export type EqAny<U1 extends ZuordType.Array, T2> = ZuordEqAny<U1, T2>;

    export type EqToAny<T1, U2 extends ZuordType.Array> = ZuordEqToAny<T1, U2>;

    
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