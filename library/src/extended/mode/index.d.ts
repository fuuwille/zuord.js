import { integrate as $integrate } from "./index.runtime";

type zuordModeXAPI = {
    integrate: typeof $integrate;
}

export declare const zuordModeX: zuordModeXAPI;

export { ZuordModeX } from "./index.types";