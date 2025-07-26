import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export type Pick<T, P> = P extends ZuordType.Plain ? {
    -readonly [K in keyof T as [ZuordTrait.IsAny<[unknown, never, any], P[K]>] extends [true] ? never : K]: Pick<T[K], P[K]>;
} : T