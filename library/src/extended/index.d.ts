import { integrate as $integrate, mode as $mode } from "./alias";
import type { Integrate as $Integrate, Mode as $Mode } from "./alias.types";

type zuordXAPI = {
    integrate: typeof $integrate;
    mode: typeof $mode;
}

export declare const zuordX: zuordXAPI;

export declare namespace ZuordX {
    export import Integrate = $Integrate;
    export import Mode = $Mode;
}