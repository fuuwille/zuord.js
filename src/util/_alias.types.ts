import { ZuordType } from "@/type/_alias.types";
import type { ZuordEq, ZuordEqAny, ZuordEqEvery, ZuordEqToAny, ZuordEqAnyToAny, ZuordEqEveryToAny } from "./eq.types";
import type { ZuordIs, ZuordIsAny, ZuordIsEvery, ZuordIsToAny, ZuordIsToEvery, ZuordIsAnyToAny, ZuordIsAnyToEvery, ZuordIsEveryToAny, ZuordIsEveryToEvery } from "./is.types";
import type { ZuordHas, ZuordHasAny, ZuordHasEvery, ZuordHasToAny, ZuordHasToEvery, ZuordHasAnyToAny, ZuordHasAnyToEvery, ZuordHasEveryToAny, ZuordHasEveryToEvery } from "./has.types";
import type { ZuordExclude, ZuordExcludeEach, ZuordExcludeEq, ZuordExcludeEqEach } from "./exclude.types";
import type { ZuordExtract, ZuordExtractEq } from "./extract.types";
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

    export type IsAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsAnyToEvery<TSources, TBases>;

    export type IsEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsEveryToAny<TSources, TBases>;
    
    export type IsEveryToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordIsEveryToEvery<TSources, TBases>;


    // HAS

    export type Has<TSource, TBase> = ZuordHas<TSource, TBase>;

    export type HasAny<TSources extends ZuordType.Array, TBase> = ZuordHasAny<TSources, TBase>;

    export type HasEvery<TSources extends ZuordType.Array, TBase> = ZuordHasEvery<TSources, TBase>;

    export type HasToAny<TSource, TBases extends ZuordType.Array> = ZuordHasToAny<TSource, TBases>;

    export type HasToEvery<TSource, TBases extends ZuordType.Array> = ZuordHasToEvery<TSource, TBases>;

    export type HasAnyToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasAnyToAny<TSources, TBases>;

    export type HasAnyToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasAnyToEvery<TSources, TBases>;

    export type HasEveryToAny<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasEveryToAny<TSources, TBases>;

    export type HasEveryToEvery<TSources extends ZuordType.Array, TBases extends ZuordType.Array> = ZuordHasEveryToEvery<TSources, TBases>;


    // EXCLUDE

    export type Exclude<TSource, TBase> = ZuordExclude<TSource, TBase>;

    export type ExcludeEach<TSource, TBases extends ZuordType.Array> = ZuordExcludeEach<TSource, TBases>;

    export type ExcludeEq<TSource, TBase> = ZuordExcludeEq<TSource, TBase>;

    export type ExcludeEqEach<TSource, TBases extends ZuordType.Array> = ZuordExcludeEqEach<TSource, TBases>;



    // EXTRACT

    export type Extract<TSource, TBase> = ZuordExtract<TSource, TBase>;

    export type ExtractEq<TSource, TBase> = ZuordExtractEq<TSource, TBase>;


    // UNION

    export type UnionOf<M extends readonly any[]> = ZuordUnionOf<M>;


    // INSTANCE

    export type InstanceOf<T> = ZuordInstanceOf<T>;
    
    export type InstanceTuple<T> = ZuordInstanceTuple<T>;


    // ARRAY

    export type ArrayIn<T> = ZuordArrayIn<T>;
    
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
}