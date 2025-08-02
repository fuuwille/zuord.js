import { integrate as $integrate } from "./index.runtime";

type extendedAPI = {
    readonly integrate: typeof $integrate;
}

export declare const extended: extendedAPI;

export { Extended } from "./index.types";