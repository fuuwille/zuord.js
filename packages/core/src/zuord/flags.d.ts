import { shallow as $shallow } from "./flags.runtime";
import { concat as $concat } from "./flags.runtime";
import { unique as $unique } from "./flags.runtime";
import { base as $base } from "./flags.runtime";

type flagsAPI = {
    readonly shallow: typeof $shallow;
    readonly concat: typeof $concat;
    readonly unique: typeof $unique;
    readonly base: typeof $base;
};

export declare const flags: flagsAPI;

export { Flags } from "./flags.types";