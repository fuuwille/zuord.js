import { flags as $flags } from "./mode.runtime";
import { resolve as $resolve } from "./mode.runtime";

type zuordModeAPI = {
    flags: typeof $flags;
    resolve: typeof $resolve;
};