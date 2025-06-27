import { ZuordUtil } from "@/util/alias.types";

type Override<TSource, TContent extends ZuordUtil.Optional<TSource>> = {
    [K in keyof TSource]: K extends keyof TContent
    ? TSource[K] extends object
      ? TContent[K] extends object
        ? Override<TSource[K], TContent[K]>
        : TContent[K]
      : TContent[K]
    : TSource[K];
} 

export type { Override as ZuordOverride };