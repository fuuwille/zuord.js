import { $TypeTrait } from "../../internal";
import { FundType } from "@zuord/type";

export type Both<T1 extends unknown, T2 extends unknown> = $TypeTrait.Eq.Both<T1, T2>;

export type Any<U1 extends FundType.Tuple, T2 extends unknown> = $TypeTrait.Eq.Any<U1, T2>;

export type Every<U1 extends FundType.Tuple, T2 extends unknown> = $TypeTrait.Eq.Every<U1, T2>;

export type Some<T1 extends unknown, U2 extends FundType.Tuple> = $TypeTrait.Eq.Some<T1, U2>;

export type AnySome<U1 extends FundType.Tuple, U2 extends FundType.Tuple> = $TypeTrait.Eq.AnySome<U1, U2>;

export type EverySome<U1 extends FundType.Tuple, U2 extends FundType.Tuple> = $TypeTrait.Eq.EverySome<U1, U2>;