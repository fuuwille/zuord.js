export type All<T> = T extends any ? keyof T : never;

export type Required<T> = Exclude<All<T>, Optional<T>>;

export type Optional<T> = {
    [K in All<T>]: T extends { [P in K]-?: T[K] } ? never : K
}[All<T>];