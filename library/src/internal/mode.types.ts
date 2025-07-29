import { ZuordCore } from "@zuord/core";

export declare namespace Mode {
    export type Integrate = ZuordCore.Mode.Resolve<[ZuordCore.Flags.Base, ZuordCore.Flags.Concat, ZuordCore.Flags.Unique]>;

    export type Merge = Integrate;

    export type Pick = ZuordCore.Flags.Base;

    export type Omit = ZuordCore.Flags.Base;
}