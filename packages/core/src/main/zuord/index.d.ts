import type { mode as $mode } from "./index.runtime";
import type { modeRecord as $modeRecord } from "./index.runtime";
import type { modeResolve as $modeResolve } from "./index.runtime";

type zuordCoreAPI = {
    mode: typeof $mode;
    modeRecord: typeof $modeRecord;
    modeResolve: typeof $modeResolve;
};

export declare const zuordCore: zuordCoreAPI;

export type ZuordCore = {};

export type * as ZuordCore from "./index.types";