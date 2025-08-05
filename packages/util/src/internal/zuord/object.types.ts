export namespace Object {
    export type Keys<T> = T extends unknown ? keyof T : never;

    export type RequiredKeys<T> = Keys<T> extends infer K ? (
        K extends keyof any ? (
            T extends unknown ?( 
                K extends RequiredCommonKeys<T> ? K : never
            ) : never
        ) : never
    ) : never;

    export type RequiredCommonKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? never : K
    }[keyof T];

    export type OptionalKeys<T> = Keys<T> extends infer K ? (
        K extends keyof any ? (
            T extends unknown ? (
                K extends OptionalCommonKeys<T> ? K : never
                ) : never
            ) : never
        ) : never;

    export type OptionalCommonKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? K : never
    }[keyof T];

    export type RequiredOnly<T> = {
        [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
    } extends infer R ? R : never;

    export type OptionalOnly<T> = {
        [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
    } extends infer R ? R : never;
}
