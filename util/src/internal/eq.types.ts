
// EQ

type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

export type { Eq as ZuordEq };


// EQ ANY

type EqAny<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : EqAny<R1, T2>
) : false;

export type { EqAny as ZuordEqAny };