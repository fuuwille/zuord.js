export type Mode<K extends string = string, V extends unknown = boolean> = {
    [P in K]: V;
}

export type ModeOf<TOf> = TOf extends [infer TFirst, ...infer TRest]
  ? TFirst & ModeOf<TRest extends Mode[] ? TRest : []>
  : {};

export type ModeFrom<TFrom, TMode extends Partial<TFrom>, TCurrent extends Omit<TFrom, keyof TMode> = TFrom> = Omit<TCurrent, keyof TMode> & TMode;