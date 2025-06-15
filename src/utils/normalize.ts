import IsObject from "./isObject";

export type ZuordUtilNormalize<T> = IsObject<T> extends true ? { [K in keyof T]: ZuordUtilNormalize<T[K]> } : T;