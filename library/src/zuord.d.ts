import { integrate as $integrate } from "./zuord.runtime";
import { mode as $mode } from "./zuord.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    mode: typeof $mode;
}

export declare const zuord: zuordAPI;