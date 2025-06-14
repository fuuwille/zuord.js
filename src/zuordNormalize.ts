import { IsFunction } from "./utils/isFunction";

export type ZuordNormalize<T> = IsFunction<T> extends true ? T 
    : T extends object ? { [K in keyof T]: ZuordNormalize<T[K]> } : T;