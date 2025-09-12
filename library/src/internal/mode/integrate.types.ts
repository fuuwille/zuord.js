import type { ZuordCore as Core } from "@zuord/core";

export type Plain = Core.Mode.Resolve<[Core.Flags.Shallow, Core.Flags.Concat]>;

export type Array = Core.Mode.Resolve<[Core.Flags.Shallow, Core.Flags.Unique]>;