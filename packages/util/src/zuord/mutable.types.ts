import { $ZuordUtil } from "../internal";

export namespace Mutable {
    export type Hybrid<T extends object> = $ZuordUtil.Mutable.Resolve<T>;
}