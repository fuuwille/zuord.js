import { ZuordCore } from "@zuord/core";

export declare namespace Mode {
    export type Integrate = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode, ZuordCore.UniqueMode]>;

    export type Merge = Integrate;

    export type Pick = ZuordCore.BaseMode;

    export type Omit = ZuordCore.BaseMode;
}