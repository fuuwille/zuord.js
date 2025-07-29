import { internalZuordCore as internal, InternalZuordCore as Internal } from ".";

export const shallow = internal.mode.flag("shallow", false) satisfies Internal.Flags.Shallow;

export const concat = internal.mode.flag("concat", false) satisfies Internal.Flags.Concat;

export const unique = internal.mode.flag("unique", false) satisfies Internal.Flags.Unique;

export const base = internal.mode.resolve([shallow]) satisfies Internal.Flags.Base;