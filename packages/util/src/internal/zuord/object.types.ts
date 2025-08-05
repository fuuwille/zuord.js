export namespace Object {
    export type Keys<T> = T extends unknown ? keyof T : never;
}