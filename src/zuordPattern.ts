import ZuordNormalize from "./zuordNormalize";

export type ZuordPattern<T> = ZuordNormalize<ZuordPatternRaw<T>>

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