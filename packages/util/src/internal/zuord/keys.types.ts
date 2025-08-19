export declare namespace Keys {
    export type All<T> = T extends any ? keyof T : never;

    export type Required<T> = Exclude<Keys.All<T>, Keys.Optional<T>>;

    export type Optional<T> = {
        [K in Keys.All<T>]: T extends { [P in K]-?: T[K] } ? never : K
    }[Keys.All<T>];
}