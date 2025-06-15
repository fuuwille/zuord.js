import * as ZuordUtil from "@/util/alias.types";

type Pattern<T> = ZuordUtil.Normalize<PatternRaw<T>>

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

export type { Pattern as ZuordPattern };
export type { PatternRaw as ZuordPatternRaw };
export type { IsPattern as ZuordIsPattern };