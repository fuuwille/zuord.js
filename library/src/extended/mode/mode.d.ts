import { integrate as $integrate } from "./mode.runtime";

type zuordModeXAPI = {
    integrate: typeof $integrate;
}

export declare const zuordModeX: zuordModeXAPI;

export { ZuordModeX } from "./mode.types";