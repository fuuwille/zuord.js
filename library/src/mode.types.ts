import { ZuordCore } from "@zuord/core";

export declare namespace Mode {
    export type Integrate = ZuordCore.Mode.Resolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode, ZuordCore.UniqueMode]>;

    export type Merge = Integrate;

    export type Pick = ZuordCore.BaseMode;

    export type Omit = ZuordCore.BaseMode;
}