import { ZuordCore } from "@zuord/core";

export namespace Mode {
    export type Integrate = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode, ZuordCore.UniqueMode]>;

    export type Merge = Integrate;

    export type Pick = ZuordCore.BaseMode;

    export type Omit = ZuordCore.BaseMode;
}