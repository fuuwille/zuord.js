import type { mode as $mode } from "./index.runtime";
import type { modeRecord as $modeRecord } from "./index.runtime";
import type { modeResolve as $modeResolve } from "./index.runtime";
import type { definePackage as $definePackage } from "./index.runtime";

type $zuordAPI = {
    definePackage: typeof $definePackage;
    mode: typeof $mode;
    modeRecord: typeof $modeRecord;
    modeResolve: typeof $modeResolve;
};

export declare const $zuord: $zuordAPI;

// @zuord-exclude
export type $Zuord = any;

export type * as $Zuord from "./index.types";