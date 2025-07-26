import { ZuordType } from "@zuord/type";

export type Pick<T, P> = (
    T extends ZuordType.Plain ? P extends ZuordType.Plain ? ({
        [K in keyof T as K extends keyof P ? K : never]: (
            [P[K]] extends [true] ? T[K] : Pick<T[K], P[K]>
        )
    }) : never : never
);