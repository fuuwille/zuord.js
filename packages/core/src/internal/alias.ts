import { mode } from "./mode";
import { flags } from "./flags";

type internalZuordCore = {
    readonly mode: typeof mode,
    readonly flags: typeof flags;
}

const internalZuordCore: internalZuordCore = {
    mode: mode,
    flags: flags
}

export { internalZuordCore };