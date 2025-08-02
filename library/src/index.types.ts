import { Integrate as $Integrate } from "./extended/zuord/integrate";

export declare namespace Zuord {
    export import Integrate = $Integrate.Plain.Restrict;

    export import IntegrateArray = $Integrate.Array.Loose;
}