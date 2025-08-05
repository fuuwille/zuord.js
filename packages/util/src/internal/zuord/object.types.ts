export namespace Object {
    export type Keys<T> = T extends any ? keyof T : never;

    export type RequiredKeys<T> = Exclude<Object.Keys<T>, Object.OptionalKeys<T>>;

    export type OptionalKeys<T> = {
        [K in Object.Keys<T>]: T extends { [P in K]-?: T[K] } ? never : K
    }[Object.Keys<T>];

    export type RequiredOne<T> = {
        [K in Object.RequiredKeys<T>]: T[K]
    };

    export type OptionalOne<T> = {
        [K in Object.OptionalKeys<T>]?: T[K]
    };
}