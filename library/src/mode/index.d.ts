import { extended as $extended } from "./index.runtime";
import { essential as $essential } from "./index.runtime";

type zuordModeAPI = {
    extended: typeof $extended;
    essential: typeof $essential;
}

export declare const zuordMode: zuordModeAPI;

export { ZuordMode } from "./index.types";