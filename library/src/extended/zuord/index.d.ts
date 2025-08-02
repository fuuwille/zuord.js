import { integrate as $integrate } from "./index.runtime";

type zuordXAPI = {
    integrate: typeof $integrate;
}

export declare const zuordX: zuordXAPI;