import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal/alias.types";


// EQ

type Eq<T1, T2> = InternalZuordUtil.Eq<T1, T2>;

export type { Eq as ZuordEq };


// EQ ANY

type EqAny<U1 extends ZuordType.Tuple, T2> = InternalZuordUtil.EqAny<U1, T2>;

export type { EqAny as ZuordEqAny };


// EQ EVERY

type EqEvery<U1 extends ZuordType.Tuple, T2> = InternalZuordUtil.EqEvery<U1, T2>;

export type { EqEvery as ZuordEqEvery };


// EQ SOME

type EqSome<T1, U2 extends ZuordType.Tuple> = InternalZuordUtil.EqSome<T1, U2>;

export type { EqSome as ZuordEqSome };


// EQ ANY SOME

type EqAnySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = InternalZuordUtil.EqAnySome<U1, U2>;

export type { EqAnySome as ZuordEqAnySome };


// EQ EVERY SOME

type EqEverySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = __EqEverySomeImpl<U1, U2>;

export type { EqEverySome as ZuordEqEverySome };

type __EqEverySomeImpl<U1, U2> = U1 extends [infer T1, ...infer R1] ? (
    [InternalZuordUtil.EqSome<T1, U2>] extends [true] ? (R1 extends ZuordType.EmptyArray ? true : __EqEverySomeImpl<R1, U2>) : false
) : false;