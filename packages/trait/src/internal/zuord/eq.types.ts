export declare namespace Eq {
    export type Both<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

    export type Any<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
        [Eq.Both<T1, T2>] extends [true] ? true : Eq.Any<R1, T2>
    ) : false;
}