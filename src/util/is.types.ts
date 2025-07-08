import { ZuordType } from "@/type/_alias.types";

type Is<T1, T2> = [T1] extends [T2] ? true : false;

type IsAny<U1 extends ZuordType.Array, T2> = U1 extends [infer First, ...infer Rest] ? (
    Is<First, T2> extends true ? true : IsAny<Rest, T2>
) : false;


export type { Is as ZuordIs };

export type { IsAny as ZuordIsAny };