import { Flags } from "./flags.types";
import { mode } from "./mode";

export const shallow = mode.flags("shallow", false) satisfies Flags.Shallow;

export const concat = mode.flags("concat", false) satisfies Flags.Concat;

export const unique = mode.flags("unique", false) satisfies Flags.Unique;

export const base = mode.resolve([shallow]) satisfies Flags.Base;