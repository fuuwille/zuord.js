import { mode } from "./mode";
import { flags } from "./flags";

type zuordCore = {
    readonly mode: typeof mode;
    readonly flags: typeof flags;
}

const zuordCore: zuordCore = {
    mode: mode,
    flags: flags
}

export { zuordCore };