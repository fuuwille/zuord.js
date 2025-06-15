import { ZuordIsObject } from "../is/isObject";

export type ZuordUtilNormalize<T> = ZuordIsObject<T> extends true ? { [K in keyof T]: ZuordUtilNormalize<T[K]> } : T;