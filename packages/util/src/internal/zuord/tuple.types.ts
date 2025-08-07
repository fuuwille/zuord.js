export namespace Tuple {
    export type Keys<T> = T extends any ? Exclude<keyof T, keyof any[]> : never;

    export type Unify<T extends Record<number, any>, Acc extends any[] =[]> = `${Acc['length']}` extends infer K ? (
        K extends keyof T ? Tuple.Unify<T, [...Acc, T[K]]> : Acc
    ) : never;

    export type UnifyLike<T> = {
        [K in Tuple.Keys<T>]: T extends any ? (K extends keyof T ? T[K] : never) : never;
    };
}