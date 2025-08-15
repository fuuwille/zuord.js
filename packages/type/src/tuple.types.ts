export namespace ZuordTuple {
    export type First<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [TFirst, ...TRest];
}