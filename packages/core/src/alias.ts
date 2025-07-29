import { mode } from "./mode";

type zuordCore = {
    readonly mode: typeof mode
}

const zuordCore: zuordCore = {
    mode: mode
}

export { zuordCore };