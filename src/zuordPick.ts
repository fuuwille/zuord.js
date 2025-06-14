import DeepPartial from "./utils/deepPartial";
import IsObject from "./utils/isObject";
import { ZuordPattern } from "./zuordPattern";

export type ZuordPick<T, U extends DeepPartial<ZuordPattern<T>>> = {
    [K in keyof T & keyof U as
        U[K] extends undefined
        ? never
        : K
    ]: IsObject<T[K]> extends true
        ? ZuordPick<T[K], NonNullable<U[K]>>
        : T[K];
};