import { flags as _flags } from "./internal/flags";
import { Flags } from "./flags.types";

const shallow = _flags.shallow satisfies Flags.Shallow;

const concat = _flags.concat satisfies Flags.Concat;

const unique = _flags.unique satisfies Flags.Unique;

const base = _flags.base satisfies Flags.Base;

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