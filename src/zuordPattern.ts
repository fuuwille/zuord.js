import { ZuordUtilNormalize } from "./utils/normalize";

export type ZuordPattern<T> = ZuordUtilNormalize<ZuordPatternRaw<T>>

export default ZuordPattern;

//

export type ZuordPatternRaw<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends object
            ? ZuordPatternRaw<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

export type IsZuorPattern<T> = T extends true 
    ? true : T extends object ? true : false;

//

export function zuordPattern<T extends object, S extends ZuordPattern<T>>(_: T, sch: S): S {
    return sch;
}
