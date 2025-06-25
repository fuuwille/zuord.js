import { ZuordUtil } from "@/util/alias.types";

type Options = {
    ignored: object[]
}

type DefaultOptions = {
    ignored: ZuordUtil.DefaultIgnored
}

export type { Options as ZuordOptions };
export type { DefaultOptions as ZuordDefaultOptions };