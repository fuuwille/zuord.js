import type { shallow as $shallow } from "./flags.runtime";
import type { inferless as $inferless } from "./flags.runtime";
import type { validate as $validate } from "./flags.runtime";
import type { concat as $concat } from "./flags.runtime";
import type { unique as $unique } from "./flags.runtime";

type flagsAPI = {
    readonly shallow: typeof $shallow;
    readonly inferless: typeof $inferless;
    readonly validate: typeof $validate;
    readonly concat: typeof $concat;
    readonly unique: typeof $unique;
};

export declare const flags: flagsAPI;

export type * as Flags from "./flags.types";