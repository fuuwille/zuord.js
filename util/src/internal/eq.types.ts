
// EQ ANY

type EqAny<U1, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : EqAny<R1, T2>
) : false;

export type { EqAny as ZuordEqAny };