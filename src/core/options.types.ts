import { Zuord } from "@/core/alias.types";

type Options = {
    ignored: Zuord.Ignored
    lite? : boolean
}

type PartialOptions = Partial<Options>;

type DefaultOptions = {
    ignored: Zuord.DefaultIgnored
    lite: false
}

type ResolvedOptions<T extends Partial<Zuord.Options>> = Omit<DefaultOptions, keyof T> & T;

export type { Options as ZuordOptions };
export type { PartialOptions as ZuordPartialOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolvedOptions as ZuordResolvedOptions };