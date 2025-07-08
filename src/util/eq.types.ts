import { ZuordType } from "@/type/_alias.types";

type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

type EqAny<U1 extends ZuordType.Array, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : EqAny<R1, T2>
) : false;

type EqEvery<U1 extends ZuordType.Array, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? EqEvery<R1, T2> : false
) : true;

type EqToAny<T1, U2 extends ZuordType.Array> = U2 extends [infer T2, ...infer R2] ? (
    [Eq<T1, T2>] extends [true] ? true : EqToAny<T1, R2>
) : false;

export type { Eq as ZuordEq };

export type { EqAny as ZuordEqAny };

export type { EqEvery as ZuordEqEvery };

export type { EqToAny as ZuordEqToAny };