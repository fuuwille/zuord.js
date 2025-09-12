import type { ZuordCore as Core } from "@zuord/core";

export type Plain = Core.ModeResolve<[Core.Mode.Shallow, Core.Mode.Concat]>;

export type Array = Core.ModeResolve<[Core.Mode.Shallow, Core.Mode.Unique]>;