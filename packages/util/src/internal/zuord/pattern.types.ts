import type { FundType } from "@zuord/type";

export type PlainResolve<T> = T extends FundType.Plain ? {
    [K in keyof T]?: true | PlainResolve<T[K]>
} : never;