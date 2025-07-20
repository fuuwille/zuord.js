export type Mode<K extends string = string> = Record<K, boolean>;

export type ModeOf<TModes> = TModes extends [infer TMode, ...infer TRest]
  ? TMode & ModeOf<TRest> : {};

export type ModeFrom<TFrom, TMode extends Partial<TFrom>, TCurrent> 
  = Required<Omit<TCurrent, keyof TMode> & TMode>;