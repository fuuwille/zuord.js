import { Zuord } from "./alias.types"

type Pick<T, U> = Zuord.Normalize<PickRaw<T, U>>;

type PickRaw<T, U> = {
    [K in keyof T & keyof U as Zuord.IsPattern<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? PickRaw<T[K], U[K]>
                    : never
                : never;
};

type PickOf<T, U> = Pick<T, Zuord.Pattern<U>>;

export type { Pick as ZuordPick };
export type { PickRaw as ZuordPickRaw };
export type { PickOf as ZuordPickOf };