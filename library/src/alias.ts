import { integrate } from "./integrate";
import { merge } from "./merge";
import { pick } from "./pick";
import { omit } from "./omit";
import { mode } from "./mode";

type zuord = {
    /**
     * Integration operations for various data structures.
     */
    readonly integrate: typeof integrate;
    /**
     * Merge operations for combining objects and arrays.
     */
    readonly merge: typeof merge;
    /**
     * Pick operations for selecting specific properties from objects.
     */
    readonly pick: typeof pick;
    /**
     * Omit operations for excluding specific properties from objects.
     */
    readonly omit: typeof omit;
    /**
     * Mode operations for defining how data structures should be processed.
    */
    readonly mode: typeof mode;
}

const zuord : zuord = {
    integrate: integrate,
    merge: merge,
    pick: pick,
    omit: omit,
    mode: mode
}

export { zuord };