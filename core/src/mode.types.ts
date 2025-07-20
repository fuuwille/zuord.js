import { InternalZuordCore as Internal } from "./internal";

export type ModeField<K extends string = string> = Internal.ModeField<K>;

export type ModeResolve<TModes extends ModeField[]> = Internal.ModeResolve<TModes>;

export type ShallowMode = Internal.ShallowMode;

export type ConcatMode = Internal.ConcatMode;

/**
 * @puretype
 */
export type BaseMode = Internal.BaseMode;