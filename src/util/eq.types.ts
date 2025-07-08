import { ZuordType } from "@/type/_alias.types";

type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

type EqAny<U1 extends ZuordType.Array, T2> = U1 extends [infer T1, ...infer R1] ? (
    [Eq<T1, T2>] extends [true] ? true : EqAny<R1, T2>
) : false;

export type { Eq as ZuordEq };

export type { EqAny as ZuordEqAny };