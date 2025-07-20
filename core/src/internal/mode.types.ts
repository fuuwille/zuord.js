export type Mode<K extends string = string> = Record<K, boolean>;

export type ModeOf<TModes> = TModes extends [...infer TRest, infer TLast]
  ? Required<Omit<ModeOf<TRest>, keyof TLast> & TLast>
  : {};