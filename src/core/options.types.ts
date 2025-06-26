import { Zuord } from "@/core/alias.types";

type Options = {
    outcasts: Zuord.Outcasts
    mode : Zuord.Mode
}

type PartialOptions = Partial<Options>;

type DefaultOptions = {
    outcasts: Zuord.DefaultOutcasts
    mode: undefined
}

type ResolveOptions<T extends PartialOptions, R extends Options = DefaultOptions> = Options & (Omit<R, keyof T> & T);

export type { Options as ZuordOptions };
export type { PartialOptions as ZuordPartialOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };