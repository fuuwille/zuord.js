import { integrate as $integrate } from "./zuord.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
}

export declare const zuordX: zuordXAPI;

export { ZuordX } from "./zuord.types";