import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export type Omit<T, P> = P extends ZuordType.Plain ? {
    -readonly [K in keyof T as [ZuordTrait.EqAny<[unknown, never, any], P[K]>] extends [true] ? K : never]: Omit<T[K], P[K]>;
} : T