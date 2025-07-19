import { Zuord } from "./index";
import { ZuordType } from "@zuord/type";

export type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = {
    outcasts: Zuord.Outcasts
    mode : Mode
}

export type DefaultOptions = {
    outcasts: Zuord.DefaultOutcasts,
    mode: Zuord.DefaultMode
}

export type ResolveOptions<T extends Zuord.Optional<Zuord.Options>, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

export type OptionsOf<T extends Zuord.Data> = Zuord.ImposeBase<Zuord.MergeOptions, { 
    mode: T["mode"],
    outcasts: ZuordType.InstanceTuple<NonNullable<T["outcasts"]>>
}, Zuord.MergeDefaultOptions>;