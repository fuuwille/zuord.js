export namespace Tuple {
    export type Keys<T> = T extends any ? Exclude<keyof T, keyof any[]> : never;

    export type UnifyLike<T> = {
        [K in Tuple.Keys<T>]: T extends any ? (K extends keyof T ? T[K] : never) : never;
    };
}