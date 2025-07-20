export type Mode<K extends string = string> = Record<K, boolean>;

export type ModeOf<TOf> = TOf extends [infer TFirst, ...infer TRest]
  ? TFirst & ModeOf<TRest extends Mode[] ? TRest : []>
  : {};

export type ModeFrom<TFrom, TMode extends Partial<TFrom>, TCurrent> = Required<Omit<TCurrent, keyof TMode> & TMode>;