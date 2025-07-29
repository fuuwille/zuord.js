import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export namespace Omit {
    export type Plain<T, P> = P extends ZuordType.Plain ? {
        -readonly [K in keyof T as [ZuordTrait.EqAny<[unknown, never, any], P[K]>] extends [true] ? K : never]: Omit.Plain<T[K], P[K]>;
    } : T
}