import type { ZuordType } from "@zuord/type";

export type PlainResolve<T> = T extends ZuordType.Plain ? {
    [K in keyof T]?: true | PlainResolve<T[K]>
} : never;