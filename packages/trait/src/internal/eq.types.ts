import { ArrayType } from "@zuord/type";

export type Both<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

export type Any<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Both<T1, T2>] extends [true] ? true : Any<R1, T2>
) : false;

export type Every<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Both<T1, T2>] extends [true] ? (R1 extends ArrayType.Empty ? true : Every<R1, T2>) : false
) : false;

export type Some<T1, U2> = U2 extends [infer T2, ...infer R2] ? (
    [Both<T1, T2>] extends [true] ? true : Some<T1, R2>
) : false;

export type AnySome<U1, U2> = U1 extends [infer T1, ...infer R1] ? (
    [Some<T1, U2>] extends [true] ? true : AnySome<R1, U2>
) : false;

export type EverySome<U1, U2> = U1 extends [infer T1, ...infer R1] ? (
    [Some<T1, U2>] extends [true] ? (R1 extends ArrayType.Empty ? true : EverySome<R1, U2>) : false
) : false;