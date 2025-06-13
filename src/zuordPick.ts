import IsObject from "./utils/isObject";
import { ZuordPattern } from "./zuordPattern";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ZuordPick<T, U extends DeepPartial<ZuordPattern<T>>> = {
    [K in keyof T & keyof U as
        U[K] extends undefined
        ? never
        : K
    ]: IsObject<T[K]> extends true
        ? ZuordPick<T[K], NonNullable<U[K]>>
        : T[K];
};