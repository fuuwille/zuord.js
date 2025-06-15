import * as ZuordUtil from "@/util/alias.types";

type Normalize<T> = ZuordUtil.IsObject<T> extends true ? { [K in keyof T]: Normalize<T[K]> } : T;

export type { Normalize as ZuordNormalize };