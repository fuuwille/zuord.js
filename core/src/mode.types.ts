import { InternalZuordCore as Internal } from "./internal";

export type Mode<K extends string = string> = Internal.Mode<K>;

export type ModeResolve<TModes extends Mode[]> = Internal.ModeResolve<TModes>;

export type ShallowMode = Internal.ShallowMode;

export type ConcatMode = Internal.ConcatMode;

export type DefaultMode = Internal.DefaultMode;