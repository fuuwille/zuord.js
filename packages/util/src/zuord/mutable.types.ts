import { $ZuordUtil } from "../internal";

export namespace Mutable {
    export type Plain<T extends object> = $ZuordUtil.Mutable.Resolve<T>;
}