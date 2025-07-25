import { ZuordType } from "@zuord/type";

export type Pick<T, P> = (
    T extends ZuordType.Plain ? P extends ZuordType.Plain ? ({
        [K in keyof P]: (
            [P[K]] extends [true] ? T[K] : Pick<T[K], P[K]>
        )
    }) : never : never
);