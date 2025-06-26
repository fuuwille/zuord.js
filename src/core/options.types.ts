import { Zuord } from "@/core/alias.types";

type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = {
    outcasts: Zuord.Outcasts
    mode : Mode
}

type DefaultOptions = {
    outcasts: Zuord.DefaultOutcasts
    mode: undefined
}

type ResolveOptions<T extends Partial<Zuord.Options>, R extends Options = DefaultOptions> = Options<R["mode"]> & (Omit<R, keyof T> & T);

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };