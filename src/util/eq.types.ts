import { ZuordType } from "@/type/_alias.types";

type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

type EqAny<U1 extends ZuordType.Array, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : EqAny<R1, T2>
) : false;

type EqEvery<U1 extends ZuordType.Array, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? (R1 extends ZuordType.EmptyArray ? true : EqEvery<R1, T2>) : false
) : false;

type EqToAny<T1, U2 extends ZuordType.Array> = U2 extends [infer T2, ...infer R2] ? (
    [Eq<T1, T2>] extends [true] ? true : EqToAny<T1, R2>
) : false;

type EqAnyToAny<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = U1 extends [infer T1, ...infer R1] ? (
    [EqToAny<T1, U2>] extends [true] ? true : EqAnyToAny<R1, U2>
) : false;

type EqEveryToAny<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = U1 extends [infer T1, ...infer R1] ? (
    [EqToAny<T1, U2>] extends [true] ? (R1 extends ZuordType.EmptyArray ? true : EqEveryToAny<R1, U2>) : false
) : false;

export type { Eq as ZuordEq };

export type { EqAny as ZuordEqAny };

export type { EqEvery as ZuordEqEvery };

export type { EqToAny as ZuordEqToAny };

export type { EqAnyToAny as ZuordEqAnyToAny };

export type { EqEveryToAny as ZuordEqEveryToAny };