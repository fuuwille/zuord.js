import { ZuordType } from "@zuord/type";

export type Pattern<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends ZuordType.Plain
            ? Pattern<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

export type IsPattern<T> = T extends true 
    ? true : T extends object ? true : false;