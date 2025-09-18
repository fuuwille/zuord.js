import type { Zuord as Core } from "zuord";

/**
 * @internal
 */
export type Plain = Core.ModeResolve<[Core.Mode.Shallow, Core.Mode.Concat]>;

/**
 * @internal
 */
export type Array = Core.ModeResolve<[Core.Mode.Shallow, Core.Mode.Unique]>;