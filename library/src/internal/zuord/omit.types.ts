import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Omit {
    export type Plain<T, P> = P extends ZuordType.Plain ? {
        -readonly [K in keyof T as [ZuordTrait.Eq.Both<P[K], true>] extends [true] ? never : K]: Omit.Plain<T[K], P[K]>;
    } : T
}