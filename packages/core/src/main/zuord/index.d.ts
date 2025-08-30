import { mode as $mode } from "./index.runtime.js";
import { flags as $flags } from "./index.runtime.js";

type zuordCoreAPI = {
    mode: typeof $mode;
    flags: typeof $flags;
};

export declare const zuordCore: zuordCoreAPI;

export * as ZuordCore from "./index.types";