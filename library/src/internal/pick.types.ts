import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Pick {
    export type Plain<T, P> = P extends ZuordType.Plain ? {
        -readonly [K in keyof T as [ZuordTrait.EqAny<[unknown, never, any], P[K]>] extends [true] ? never : K]: Pick.Plain<T[K], P[K]>;
    } : T
}