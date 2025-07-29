import { ZuordCore as Core } from "@zuord/core";

export declare namespace Mode {
    export type Integrate = Core.Mode.Resolve<[Core.Flags.Base, Core.Flags.Concat, Core.Flags.Unique]>;

    export type Merge = Integrate;

    export type Pick = Core.Flags.Base;

    export type Omit = Core.Flags.Base;
}