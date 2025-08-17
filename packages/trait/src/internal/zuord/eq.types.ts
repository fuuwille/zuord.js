import { ZuordArray } from "@zuord/type";

export declare namespace Eq {
    export type Both<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

    export type Any<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
        [Eq.Both<T1, T2>] extends [true] ? true : Eq.Any<R1, T2>
    ) : false;

    export type Every<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
        [Eq.Both<T1, T2>] extends [true] ? (R1 extends ZuordArray.Empty ? true : Eq.Every<R1, T2>) : false
    ) : false;

    export type Some<T1, U2> = U2 extends [infer T2, ...infer R2] ? (
        [Eq.Both<T1, T2>] extends [true] ? true : Eq.Some<T1, R2>
    ) : false;

    export type AnySome<U1, U2> = U1 extends [infer T1, ...infer R1] ? (
        [Eq.Some<T1, U2>] extends [true] ? true : Eq.AnySome<R1, U2>
    ) : false;

    export type EverySome<U1, U2> = U1 extends [infer T1, ...infer R1] ? (
        [Eq.Some<T1, U2>] extends [true] ? (R1 extends ZuordArray.Empty ? true : Eq.EverySome<R1, U2>) : false
    ) : false;
}