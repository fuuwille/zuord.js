import { integrate as $integrate } from "./index.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
}

export declare const zuord: zuordAPI;