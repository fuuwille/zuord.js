import { InternalZuord } from "./index"
import { ZuordType } from "../../../packages/type/src";

export type Pattern<T> = InternalZuord.Normalize<PatternRaw<T>>

export type PatternRaw<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends ZuordType.Plain
            ? PatternRaw<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

export type IsPattern<T> = T extends true 
    ? true : T extends object ? true : false;