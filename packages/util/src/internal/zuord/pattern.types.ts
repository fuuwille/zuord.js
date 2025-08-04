import { ZuordType } from "@zuord/type";

export type Pattern<T> = T extends ZuordType.Plain ? {
    [K in keyof T]?: true | Pattern<T[K]>
} : never;