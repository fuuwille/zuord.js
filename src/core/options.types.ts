import { Zuord } from "@/core/alias.types";

type Options = {
    ignored: Zuord.Outcasts
    lite : boolean,
    mode : Zuord.Mode
}

type PartialOptions = Partial<Options>;

type DefaultOptions = {
    ignored: Zuord.DefaultOutcasts
    lite: false,
    mode: undefined
}

type ResolveOptions<T extends PartialOptions, R extends Options = DefaultOptions> = Options & (Omit<R, keyof T> & T);

export type { Options as ZuordOptions };
export type { PartialOptions as ZuordPartialOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };