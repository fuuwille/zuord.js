import { Mode } from "./mode.types";

export type Options<TModes extends Mode[]> = TModes extends [infer First, ...infer Rest]
  ? First & Options<Rest extends Mode[] ? Rest : []>
  : {};