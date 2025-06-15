import * as ZuordUtil from "@/util/alias.compile";

type Pick<T, U> = ZuordUtil.Normalize<PickRaw<T, U>>;

type PickRaw<T, U> = {
    [K in keyof T & keyof U as ZuordUtil.IsPattern<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? PickRaw<T[K], U[K]>
                    : never
                : never;
};

type PickOf<T, U> = Pick<T, ZuordUtil.Pattern<U>>;

export type { Pick as ZuordPick };
export type { PickRaw as ZuordPickRaw };
export type { PickOf as ZuordPickOf };