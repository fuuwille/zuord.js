import { shallow as $shallow } from "./flags.runtime.js";
import { concat as $concat } from "./flags.runtime.js";
import { unique as $unique } from "./flags.runtime.js";
import { base as $base } from "./flags.runtime.js";

type flagsAPI = {
    readonly shallow: typeof $shallow;
    readonly concat: typeof $concat;
    readonly unique: typeof $unique;
    readonly base: typeof $base;
};

export declare const flags: flagsAPI;

export * as Flags from "./flags.types.js";