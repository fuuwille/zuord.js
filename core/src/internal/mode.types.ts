export type Mode<K extends string = string, V extends unknown = boolean> = {
    [P in K]: V;
}

export type ModeOf<TOf> = TOf extends [infer TFirst, ...infer TRest]
  ? TFirst & ModeOf<TRest extends Mode[] ? TRest : []>
  : {};

export type ModeFrom<TFrom, TMode extends TFrom> = TMode;