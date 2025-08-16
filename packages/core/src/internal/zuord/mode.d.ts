import { flags as $flags } from "./mode.runtime";
import { resolve as $resolve } from "./mode.runtime";

type modeAPI = {
    flags: typeof $flags;
    resolve: typeof $resolve;
}

export declare const mode: modeAPI;