import { ZuordCore as Core } from "@zuord/core";

export declare namespace Integrate {
    export type Plain = Core.Mode.Resolve<[Core.Flags.Base, Core.Flags.Concat]>;

    export type Array = Core.Mode.Resolve<[Core.Flags.Base, Core.Flags.Concat, Core.Flags.Unique]>;
}