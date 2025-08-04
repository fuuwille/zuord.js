import { ZuordType } from "@zuord/type";

export namespace Pattern {
    export type PlainResolve<T> = T extends ZuordType.Plain ? {
        [K in keyof T]?: true | PlainResolve<T[K]>
    } : never;
}