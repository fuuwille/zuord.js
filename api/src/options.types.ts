import { Zuord } from "./alias.types";
import { ZuordType } from "@zuord/type";

type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = {
    outcasts: Zuord.Outcasts
    mode : Mode
}

type DefaultOptions = {
    outcasts: Zuord.DefaultOutcasts,
    mode: Zuord.DefaultMode
}

type ResolveOptions<T extends Zuord.Optional<Zuord.Options>, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

type OptionsOf<T extends Zuord.Data> = Zuord.ImposeBase<Zuord.MergeOptions, { 
    mode: T["mode"],
    outcasts: ZuordType.InstanceTuple<NonNullable<T["outcasts"]>>
}, Zuord.MergeDefaultOptions>;

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };
export type { OptionsOf as ZuordOptionsOf };