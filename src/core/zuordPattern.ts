import { ZuordNormalize } from "../util/normalize";

type Pattern<T> = ZuordNormalize<PatternRaw<T>>

type PatternRaw<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends object
            ? PatternRaw<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

type IsPattern<T> = T extends true 
    ? true : T extends object ? true : false;

function zuordPattern<T extends object, S extends Pattern<T>>(_: T, sch: S): S {
    return sch;
}

//

export type { Pattern as ZuordPattern };
export type { PatternRaw as ZuordPatternRaw };
export type { IsPattern as ZuordIsPattern };
export { zuordPattern as zuordPattern };
