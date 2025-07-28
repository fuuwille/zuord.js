import { integrate } from "./integrate";
import { merge } from "./merge.index";

type zuord = {
    /**
     * Integration operations for various data structures.
     */
    readonly integrate: typeof integrate;
    /**
     * Merge operations for combining objects and arrays.
     */
    readonly merge: typeof merge;
}

const zuord : zuord = {
    get integrate() {
        return integrate;
    },
    get merge() {
        return merge;
    }
}

export { zuord };