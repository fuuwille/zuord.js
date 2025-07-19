import { InternalZuord } from "./index";
import { ZuordType } from "../type";

export type Options<Mode extends Partial<InternalZuord.Mode> = Partial<InternalZuord.Mode>> = {
    outcasts: InternalZuord.Outcasts
    mode : Mode
}

export type DefaultOptions = {
    outcasts: InternalZuord.DefaultOutcasts,
    mode: InternalZuord.DefaultMode
}

export type ResolveOptions<T extends InternalZuord.Optional<InternalZuord.Options>, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

export type OptionsOf<T extends InternalZuord.Data> = InternalZuord.Impose<InternalZuord.MergeOptions, { 
    mode: T["mode"],
    outcasts: ZuordType.InstanceTuple<NonNullable<T["outcasts"]>>
}, InternalZuord.MergeDefaultOptions>;