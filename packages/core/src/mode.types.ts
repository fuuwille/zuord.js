import { InternalZuordCore as Internal } from "./internal";

export type ModeField<K extends string = string, V extends boolean = boolean> = Internal.ModeField<K, V>;

export type ModeResolve<TModes extends ModeField[]> = Internal.ModeResolve<TModes>;

export type ModeOn<TMode, TKey> = Internal.ModeOn<TMode, TKey>;

export type ShallowMode = ModeField<"shallow">;

export type ConcatMode = ModeField<"concat">;

export type UniqueMode = ModeField<"unique">;

export type BaseMode = ModeResolve<[ShallowMode]>;