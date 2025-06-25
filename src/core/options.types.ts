import { Zuord } from "@/core/alias.types";

type Options = {
    ignored: Zuord.Ignored
    lite? : boolean
}

type DefaultOptions = {
    ignored: Zuord.DefaultIgnored
    lite: false
}

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };