import { internalZuordCore as internal, InternalZuordCore as Internal } from ".";

const shallow = internal.mode.flag("shallow", false) satisfies Internal.Flags.Shallow;

const concat = internal.mode.flag("concat", false) satisfies Internal.Flags.Concat;

const unique = internal.mode.flag("unique", false) satisfies Internal.Flags.Unique;

const base = internal.mode.resolve([shallow]) satisfies Internal.Flags.Base;

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