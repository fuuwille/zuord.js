import { InternalZuordCore as Internal } from "./internal";

export type Mode<K extends string = string> = Internal.Mode<K>;

export type ModeOf<TModes extends Mode[]> = Internal.ModeOf<TModes>;

export type ModeFrom<TFrom extends Mode, TMode extends Partial<TFrom>, TCurrent extends Omit<TFrom, keyof TMode> = TFrom> 
= Internal.ModeFrom<TFrom, TMode, TCurrent>;

// Define specific modes

export type BaseMode = ModeOf<[ShallowMode]>;

export type DefaultMode = ModeFrom<BaseMode, {
    shallow: false;
}>;

export type ResolveMode<TMode extends Partial<BaseMode>> = ModeFrom<BaseMode, TMode, DefaultMode>;

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;