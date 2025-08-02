import { integrate as $integrate } from "./index.runtime";
import { mode as $mode } from "./index.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    mode: typeof $mode;
}

export declare const zuord: zuordAPI;

export { Zuord } from "./index.types.ts";