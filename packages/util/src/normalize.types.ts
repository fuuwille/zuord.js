import { Normalize as $Normalize } from "./internal/zuord";

export namespace Normalize {
    export type Plain<T, TMode> = $Normalize.PlainResolve<T, TMode>;
}