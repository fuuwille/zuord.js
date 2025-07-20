import { InternalZuordCore as Internal } from "./internal";

export type Mode<K extends string = string> = Internal.Mode<K>;

export type ModeResolve<TModes extends Mode[]> = Internal.ModeResolve<TModes>;

// Define specific modes

export type BaseMode = ModeResolve<[ShallowMode]>;

export type DefaultMode = {
    shallow: false;
};

export type ResolvedMode<TMode extends Partial<BaseMode>> = ModeResolve<[DefaultMode, TMode]>;

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;