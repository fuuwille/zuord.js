import { shallow as $shallow } from "./flags.runtime";
import { concat as $concat } from "./flags.runtime";
import { unique as $unique } from "./flags.runtime";
import { base as $base } from "./flags.runtime";

type flagsAPI = {
    shallow: typeof $shallow;
    concat: typeof $concat;
    unique: typeof $unique;
    base: typeof $base;
};

export declare const flags: flagsAPI;