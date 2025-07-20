export type Mode<K extends string = string> = Record<K, boolean>;

/**
 * @puretype
 */
export type ModeFrom<TMode extends TFrom, TFrom extends Mode> = TMode;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast]
  ? Required<Omit<ModeResolve<TRest>, keyof TLast> & TLast>
  : {};