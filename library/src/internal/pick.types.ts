import { IsPattern, Pattern } from "./pattern.types";

export type Pick<T, U> =  {
    [K in keyof T & keyof U as IsPattern<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? Pick<T[K], U[K]>
                    : never
                : never;
};

export type PickOf<T, U> = Pick<T, Pattern<U>>;