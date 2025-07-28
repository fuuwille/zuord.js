import { integrate } from "./integrate";
import { merge } from "./merge.index";
export * from "./pick";
export * from "./omit";

type zuord = {
    integrate: typeof integrate;
    merge: typeof merge;
}

export const zuord : zuord = {
    get integrate() {
        return integrate;
    },
    get merge() {
        return merge;
    }
}