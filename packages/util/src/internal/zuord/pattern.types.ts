import { ZuordType } from "@zuord/type";

export namespace Pattern {
    export type ResolvePlainOnly<T> = T extends ZuordType.Plain ? {
        [K in keyof T]?: true | ResolvePlainOnly<T[K]>
    } : never;
}