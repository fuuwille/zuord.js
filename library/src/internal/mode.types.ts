import { ZuordCore } from "@zuord/core";

export namespace Mode {
    export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode, ZuordCore.UniqueMode]>;
}