import type { flags as $flags } from "./mode.runtime";
import type { resolve as $resolve } from "./mode.runtime";

type modeAPI = {
    flags: typeof $flags;
    resolve: typeof $resolve;
};

export declare const mode: modeAPI;

export type * as Mode from "./mode.types";