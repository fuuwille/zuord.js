import type { $ZuordUtil } from "../../internal";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export declare namespace Only {
    export type Required<T extends ZuordType.Plain, TMode extends ZuordCore.Mode.Flags> = $ZuordUtil.Only.ResolveRequired<T, TMode>;
}