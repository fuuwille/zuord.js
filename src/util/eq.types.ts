import { ZuordType } from "@/type/_alias.types";


// EQ

type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

export type { Eq as ZuordEq };


// EQ ANY

type EqAny<U1 extends ZuordType.Tuple, T2> = __EqAnyImpl<U1, T2>;

export type { EqAny as ZuordEqAny };

type __EqAnyImpl<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : __EqAnyImpl<R1, T2>
) : false;


// EQ EVERY

type EqEvery<U1 extends ZuordType.Tuple, T2> = __EqEveryImpl<U1, T2>;

export type { EqEvery as ZuordEqEvery };

type __EqEveryImpl<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? (R1 extends ZuordType.EmptyArray ? true : __EqEveryImpl<R1, T2>) : false
) : false;


// EQ SOME

type EqSome<T1, U2 extends ZuordType.Array> = U2 extends [infer T2, ...infer R2] ? (
    [Eq<T1, T2>] extends [true] ? true : EqSome<T1, R2>
) : false;

export type { EqSome as ZuordEqSome };


// EQ ANY SOME

type EqAnySome<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = U1 extends [infer T1, ...infer R1] ? (
    [EqSome<T1, U2>] extends [true] ? true : EqAnySome<R1, U2>
) : false;

export type { EqAnySome as ZuordEqAnySome };


// EQ EVERY SOME

type EqEverySome<U1 extends ZuordType.Array, U2 extends ZuordType.Array> = U1 extends [infer T1, ...infer R1] ? (
    [EqSome<T1, U2>] extends [true] ? (R1 extends ZuordType.EmptyArray ? true : EqEverySome<R1, U2>) : false
) : false;

export type { EqEverySome as ZuordEqEverySome };