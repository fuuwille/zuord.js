import IsObject from "./utils/isObject";

export type ZuordPick<T, U> = {
    [K in keyof T as K extends keyof U ? never : K]: T[K];
} & {
    [K in keyof T & keyof U as
        U[K] extends undefined
        ? never
        : IsObject<T[K]> extends true
            ? K
            : never
    ]: ZuordPick<T[K], U[K]>
};

export default ZuordPick;