import { integrate as $integrate } from "./mode.runtime";

type modeAPI = {
    readonly integrate: typeof $integrate;
}

export declare const mode: modeAPI;

export { Mode } from "./mode.types";