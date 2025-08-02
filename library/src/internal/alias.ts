import { integrate } from "./integrate.runtime";
import { merge } from "./merge";
import { pick } from "./pick";
import { omit } from "./omit";
import { mode } from "./mode";

type internalZuord = {
    readonly integrate: typeof integrate;
    readonly merge: typeof merge;
    readonly pick: typeof pick;
    readonly omit: typeof omit;
    readonly mode: typeof mode;
}

const internalZuord: internalZuord = {
    integrate,
    merge,
    pick,
    omit,
    mode
};

export { internalZuord };