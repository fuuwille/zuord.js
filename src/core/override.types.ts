import { ZuordUtil } from "@/util/alias.types";

type Override<TBase, TContent extends ZuordUtil.Optional<TBase>> = {
    [K in keyof TBase]: K extends keyof TContent
    ? TBase[K] extends object
      ? TContent[K] extends object
        ? Override<TBase[K], TContent[K]>
        : TContent[K]
      : TContent[K]
    : TBase[K];
} 

export type { Override as ZuordOverride };