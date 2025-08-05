export namespace Object {
    export type Keys<T> = keyof T;
      
    export type AllKeys<T> = T extends any ? keyof T : never;

    export type RequiredKeys<T> = Exclude<AllKeys<T>, OptionalKeys<T>>;

    export type OptionalKeys<T> = {
        [K in Object.AllKeys<T>]: T extends { [P in K]-?: T[K] } ? never : K
    }[Object.AllKeys<T>];
}