export type Keys<T> = T extends any ? Exclude<keyof T, keyof any[]> : never;

export type Unify<T> = ResolveUnify<ExtractUnify<T>>;

export type ResolveUnify<T, Acc = []> = Acc extends any[] ? (
    `${Acc['length']}` extends infer K ? (
        K extends keyof T ? ResolveUnify<T, [...Acc, T[K]]> : Acc
    ) : never
) : never;

export type ExtractUnify<T> = {
    [K in Keys<T>]: T extends any ? (K extends keyof T ? T[K] : never) : never;
};