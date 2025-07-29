import { mode } from "./mode";

type internalZuordCore = {
    readonly mode: typeof mode
}

const internalZuordCore: internalZuordCore = {
    mode: mode
}

export { internalZuordCore };