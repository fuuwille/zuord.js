import { Zuord } from "@/core/alias.types";

type Options = {
    ignored: Zuord.Ignored
}

type DefaultOptions = {
    ignored: Zuord.DefaultIgnored
}

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };