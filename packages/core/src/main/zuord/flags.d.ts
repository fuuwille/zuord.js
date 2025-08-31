import type { shallow as $shallow } from "./flags.runtime";
import type { concat as $concat } from "./flags.runtime";
import type { unique as $unique } from "./flags.runtime";
import type { base as $base } from "./flags.runtime";

type flagsAPI = {
    readonly shallow: typeof $shallow;
    readonly concat: typeof $concat;
    readonly unique: typeof $unique;
    readonly base: typeof $base;
};

export declare const flags: flagsAPI;

export type * as Flags from "./flags.types";