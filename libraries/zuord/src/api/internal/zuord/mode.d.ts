import type { shallow as $shallow } from "./mode.runtime";
import type { inferless as $inferless } from "./mode.runtime";
import type { validate as $validate } from "./mode.runtime";
import type { concat as $concat } from "./mode.runtime";
import type { unique as $unique } from "./mode.runtime";

type modeAPI = {
    readonly shallow: typeof $shallow;
    readonly inferless: typeof $inferless;
    readonly validate: typeof $validate;
    readonly concat: typeof $concat;
    readonly unique: typeof $unique;
};

export declare const mode: modeAPI;

// @zuord-exclude
export type Mode = any;

export type * as Mode from "./mode.types";