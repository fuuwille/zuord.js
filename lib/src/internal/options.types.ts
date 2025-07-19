import { InternalZuord } from "./index";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";
import { ZuordType } from "@zuord/type";

export type Options<Mode extends Partial<ZuordCore.BaseMode> = Partial<ZuordCore.BaseMode>> = {
    outcasts: InternalZuord.Outcasts
    mode : Mode
}

export type DefaultOptions = {
    outcasts: InternalZuord.DefaultOutcasts,
    mode: ZuordCore.DefaultMode
}

export type ResolveOptions<T extends ZuordUtil.Partialize<InternalZuord.Options>, R extends Options = DefaultOptions> = Omit<R, keyof T> & T;

export type OptionsOf<T extends InternalZuord.Data> = InternalZuord.Impose<InternalZuord.MergeOptions, { 
    mode: T["mode"],
    outcasts: ZuordType.InstanceTuple<NonNullable<T["outcasts"]>>
}, InternalZuord.MergeDefaultOptions>;