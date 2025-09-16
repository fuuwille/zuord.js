import type { $TypeUtil } from "../internal";

export type Hybrid<T extends object> = $TypeUtil.Mutable.Resolve<T>;