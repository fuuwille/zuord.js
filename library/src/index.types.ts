import { Integrate as $Integrate } from "./extended/integrate";
import { Mode as $Mode } from "./mode";

export declare namespace Zuord {
    export import Integrate = $Integrate.Plain.Restrict;

    export import IntegrateArray = $Integrate.Array.Loose;

    export import Mode = $Mode;
}