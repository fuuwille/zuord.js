import { ZuordType } from "@zuord/type";

export type ModeField<K extends string = string, V extends boolean = boolean> = Record<K, V>;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast]
  ? ModeResolve<TRest> & ZuordType.RequiredOnly<TLast>
  : {};

export type ShallowMode = ModeField<"shallow">;

export type ConcatMode = ModeField<"concat">;

export type BaseMode = ModeResolve<[ShallowMode]>;