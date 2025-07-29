import { Flags } from "./flags.types";
import { mode } from "./mode";

const shallow = mode.flag("shallow", false) satisfies Flags.Shallow;

const concat = mode.flag("concat", false) satisfies Flags.Concat;

const unique = mode.flag("unique", false) satisfies Flags.Unique;

const base = mode.resolve([shallow]) satisfies Flags.Base;

type flags = {
    readonly shallow: typeof shallow;
    readonly concat: typeof concat;
    readonly unique: typeof unique;
    readonly base: typeof base;
};

export const flags: flags = {
    shallow,
    concat,
    unique,
    base
};