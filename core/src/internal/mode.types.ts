export type Mode<K extends string = string> = Record<K, boolean>;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast]
  ? Required<Omit<ModeResolve<TRest>, keyof TLast> & TLast>
  : {};

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;

export type DefaultMode = ModeResolve<[ShallowMode]>;