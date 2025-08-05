export namespace Object {
    export type Keys<T> = keyof T;
      
    export type AllKeys<T> = T extends any ? keyof T : never;
}