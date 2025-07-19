import { Zuord } from "./index"

export type Pick<T, U> = Zuord.Normalize<PickRaw<T, U>>;

export type PickRaw<T, U> = {
    [K in keyof T & keyof U as Zuord.IsPattern<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? PickRaw<T[K], U[K]>
                    : never
                : never;
};

export type PickOf<T, U> = Pick<T, Zuord.Pattern<U>>;