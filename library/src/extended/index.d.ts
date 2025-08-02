import { integrate as $integrate, mode as $mode } from "./alias";
import type { Integrate as $Integrate, Mode as $Mode } from "./alias.types";

type zuordXAPI = {
    integrate: typeof $integrate;
}

export declare const zuordX: zuordXAPI;

export declare namespace ZuordX {
    export import Integrate = $Integrate;
}