import { integrate as $integrate } from "./index.runtime";

type modeAPI = {
    readonly integrate: typeof $integrate;
}

export declare const mode: modeAPI;

export { Mode } from "./index.types";