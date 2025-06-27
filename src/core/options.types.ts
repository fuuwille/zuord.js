import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = {
    outcasts: Zuord.Outcasts
    mode : Mode
}

type DefaultOptions = {
    outcasts: Zuord.DefaultOutcasts,
    mode: Zuord.DefaultMode
}

type ResolveOptions<T extends ZuordUtil.Optional<Zuord.Options>, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

type OptionsOf<T extends Zuord.Data> = Zuord.MergeResolveOptions<T extends { outcasts?: infer O, mode?: infer M }
    ? { outcasts: O extends unknown[] ? ZuordUtil.InstanceTuple<O> : undefined, mode: Required<Omit<Zuord.MergeDefaultMode, keyof M> & M> }
    : {}>;

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };
export type { OptionsOf as ZuordOptionsOf };