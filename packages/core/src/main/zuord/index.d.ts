import type { mode as $mode } from "./index.runtime";
import type { flags as $flags } from "./index.runtime";

type zuordCoreAPI = {
    mode: typeof $mode;
    flags: typeof $flags;
};

export declare const zuordCore: zuordCoreAPI;

export type * as ZuordCore from "./index.types";