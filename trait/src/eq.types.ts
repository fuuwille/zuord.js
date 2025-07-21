import { ZuordType } from "../../packages/type/src";
import { InternalZuordTrait } from "./internal";


// EQ

type Eq<T1, T2> = InternalZuordTrait.Eq<T1, T2>;

export type { Eq as ZuordEq };


// EQ ANY

type EqAny<U1 extends ZuordType.Tuple, T2> = InternalZuordTrait.EqAny<U1, T2>;

export type { EqAny as ZuordEqAny };


// EQ EVERY

type EqEvery<U1 extends ZuordType.Tuple, T2> = InternalZuordTrait.EqEvery<U1, T2>;

export type { EqEvery as ZuordEqEvery };


// EQ SOME

type EqSome<T1, U2 extends ZuordType.Tuple> = InternalZuordTrait.EqSome<T1, U2>;

export type { EqSome as ZuordEqSome };


// EQ ANY SOME

type EqAnySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = InternalZuordTrait.EqAnySome<U1, U2>;

export type { EqAnySome as ZuordEqAnySome };


// EQ EVERY SOME

type EqEverySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = InternalZuordTrait.EqEverySome<U1, U2>;

export type { EqEverySome as ZuordEqEverySome };