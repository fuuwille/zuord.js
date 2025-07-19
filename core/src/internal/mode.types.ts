export type Mode<K extends string = string, V extends unknown = boolean> = {
    [P in K]: V;
}

export type ModeOf<TModes> = TModes extends [infer First, ...infer Rest]
  ? First & ModeOf<Rest extends Mode[] ? Rest : []>
  : {};

export type ModeFrom<TMode, TOptions extends TMode> = TOptions;