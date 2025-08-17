import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace One {
    export type All<T extends Type.Plain, TMode extends Core.Mode.Flags> = $ZuordUtil.One.ResolveAll<T, TMode>;

    export type Required<T extends Type.Plain, TMode extends Core.Mode.Flags> = $ZuordUtil.One.ResolveRequired<T, TMode>;

    export type Optional<T extends Type.Plain, TMode extends Core.Mode.Flags> = $ZuordUtil.One.ResolveOptional<T, TMode>;
}