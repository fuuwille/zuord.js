import { InternalZuordCore as Internal } from "./internal";

export type Mode<K extends string = string> = Internal.Mode<K>;

export type ModeOf<TModes extends Mode[]> = Internal.ModeOf<TModes>;

// Define specific modes

export type BaseMode = ModeOf<[ShallowMode]>;

export type DefaultMode = {
    shallow: false;
};

export type ResolveMode<TMode extends Partial<BaseMode>> = ModeOf<[DefaultMode, TMode]>;

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;