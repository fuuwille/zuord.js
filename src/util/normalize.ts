import { ZuordIsObject } from "../is/object";

export type ZuordUtilNormalize<T> = ZuordIsObject<T> extends true ? { [K in keyof T]: ZuordUtilNormalize<T[K]> } : T;