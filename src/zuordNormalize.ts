import IsObject from "./utils/isObject";

export type ZuordNormalize<T> = IsObject<T> extends true ? { [K in keyof T]: ZuordNormalize<T[K]> } : T;