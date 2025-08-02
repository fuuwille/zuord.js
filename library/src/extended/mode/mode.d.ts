import { integrate as $integrate } from "./mode.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
}

export declare const zuord: zuordAPI;

export { ZuordModeX } from "./mode.types";