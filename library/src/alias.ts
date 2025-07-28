import { integrate } from "./integrate";
import { merge } from "./merge.index";

type zuord = {
    readonly integrate: typeof integrate;
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