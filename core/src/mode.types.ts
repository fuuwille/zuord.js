import { InternalZuordCore as Internal } from "./internal";

export type Mode<K extends string = string> = Internal.Mode<K>;

/**
 * @puretype
 */
export type ModeFrom<TMode extends TFrom, TFrom extends Internal.Mode> = Internal.ModeFrom<TMode, TFrom>;

export type ModeResolve<TModes extends Mode[]> = Internal.ModeResolve<TModes>;

// Define specific modes

export type BaseMode = ModeResolve<[ShallowMode]>;

export type DefaultMode = ModeFrom<{
    shallow: false;
}, BaseMode>;

export type ResolvedMode<TMode extends Partial<BaseMode>> = ModeResolve<[DefaultMode, TMode]>;

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;