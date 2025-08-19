import type { $ZuordUtil } from "@zuord/util/internal";

export declare namespace Mutable {
    export type Hybrid<T extends object> = $ZuordUtil.Mutable.Resolve<T>;
}