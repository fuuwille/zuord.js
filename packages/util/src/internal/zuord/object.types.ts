export namespace Object {
    export type Keys<T> = T extends unknown ? keyof T : never;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? never : K
    }[keyof T];
}