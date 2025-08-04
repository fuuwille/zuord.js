import { Normalize as $Normalize } from "./internal/zuord";
import { ZuordType as Type } from "@zuord/type";

export namespace Normalize {
    export type Plain<T extends Type.Plain, TMode> = $Normalize.PlainResolve<T, TMode>;
}