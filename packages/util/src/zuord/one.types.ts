import type { $ZuordUtil } from "@zuord/util/internal";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export declare namespace One {
    export type All<T extends ZuordType.Plain, TMode extends ZuordCore.Mode.Flags> = $ZuordUtil.One.ResolveAll<T, TMode>;

    export type Required<T extends ZuordType.Plain, TMode extends ZuordCore.Mode.Flags> = $ZuordUtil.One.ResolveRequired<T, TMode>;

    export type Optional<T extends ZuordType.Plain, TMode extends ZuordCore.Mode.Flags> = $ZuordUtil.One.ResolveOptional<T, TMode>;
}