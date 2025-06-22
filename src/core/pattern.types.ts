import { Zuord } from "@/core/alias.types"

type Pattern<T> = Zuord.Normalize<PatternRaw<T>>

type PatternRaw<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends object
            ? PatternRaw<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

export type { Pattern as ZuordPattern };
export type { PatternRaw as ZuordPatternRaw };