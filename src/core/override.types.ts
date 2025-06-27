import { ZuordUtil } from "@/util/alias.types";

type Override<T, O extends ZuordUtil.Optional<T>> = {
    [K in keyof T]: K extends keyof O
    ? T[K] extends object
      ? O[K] extends object
        ? Override<T[K], O[K]>
        : O[K]
      : O[K]
    : T[K];
} 

export type { Override as ZuordOverride };