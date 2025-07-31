import { integrate as $integrate, mode as $mode } from "./alias";
import type { Integrate as $Integrate, Mode as $Mode } from "./alias.types";

export declare const zuordX: {
    readonly integrate: typeof $integrate;
    readonly mode: typeof $mode;
};

export declare namespace ZuordX {
    export import Integrate = $Integrate;
    export import Mode = $Mode;
}