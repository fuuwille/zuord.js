import { $ZuordTrait } from "../../internal";
import { FundType } from "@zuord/type";

export type Both<T1 extends unknown, T2 extends unknown> = $ZuordTrait.Eq.Both<T1, T2>;

export type Any<U1 extends FundType.Tuple, T2 extends unknown> = $ZuordTrait.Eq.Any<U1, T2>;

export type Every<U1 extends FundType.Tuple, T2 extends unknown> = $ZuordTrait.Eq.Every<U1, T2>;

export type Some<T1 extends unknown, U2 extends FundType.Tuple> = $ZuordTrait.Eq.Some<T1, U2>;

export type AnySome<U1 extends FundType.Tuple, U2 extends FundType.Tuple> = $ZuordTrait.Eq.AnySome<U1, U2>;

export type EverySome<U1 extends FundType.Tuple, U2 extends FundType.Tuple> = $ZuordTrait.Eq.EverySome<U1, U2>;