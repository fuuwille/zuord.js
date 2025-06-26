import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = {
    outcasts: Zuord.Outcasts
    mode : Mode
}

type DefaultOptions = Options<Zuord.DefaultMode>

type ResolveOptions<T extends ZuordUtil.Optional<Zuord.Options>, R extends Options = DefaultOptions> = R & (Omit<R, keyof T> & T);

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };
export type { ResolveOptions as ZuordResolvedOptions };