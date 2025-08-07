export namespace Tuple {
    export type Keys<T> = T extends any ? Exclude<keyof T, keyof any[]> : never;
}