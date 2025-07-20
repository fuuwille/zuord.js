export type ModeField<K extends string = string, V extends boolean = boolean> = Record<K, V>;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast]
  ? Required<Omit<ModeResolve<TRest>, keyof TLast> & TLast>
  : {};

export type ShallowMode = ModeField<"shallow">;

export type ConcatMode = ModeField<"concat">;

export type BaseMode = ModeResolve<[ShallowMode]>;