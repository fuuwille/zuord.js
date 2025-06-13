import IsObject from "./utils/isObject";

export type ZuordPattern<T> = IsObject<T> extends true
    ? { [K in keyof T]: ZuordPattern<T[K]> }
    : true;