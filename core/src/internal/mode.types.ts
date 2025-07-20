export type ModeField<K extends string = string> = Record<K, boolean>;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast]
  ? Required<Omit<ModeResolve<TRest>, keyof TLast> & TLast>
  : {};

export type ShallowMode = ModeField<"shallow">;

export type ConcatMode = ModeField<"concat">;

export type DefaultMode = ModeResolve<[ShallowMode]>;