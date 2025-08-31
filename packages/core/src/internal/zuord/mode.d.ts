import { flags as $flags } from "./mode.runtime.js";
import { resolve as $resolve } from "./mode.runtime.js";

type modeAPI = {
    flags: typeof $flags;
    resolve: typeof $resolve;
}

export declare const mode: modeAPI;

export * as Mode from "./mode.types.js";