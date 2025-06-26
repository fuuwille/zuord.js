import { Zuord } from "@/core/alias.types";

type Options = {
    ignored: Zuord.Ignored
    lite : boolean
}

type PartialOptions = Partial<Options>;

type DefaultOptions = {
    ignored: Zuord.DefaultIgnored
    lite: false
}

type ResolveOptions<T extends PartialOptions, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

export type { Options as ZuordOptions };
export type { PartialOptions as ZuordPartialOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };