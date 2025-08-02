import { unknown as $unknown } from "./integrate.runtime";
import { plain as $plain } from "./integrate.runtime";
import { array as $array } from "./integrate.runtime";

type integrateAPI = {
    unknown: typeof $unknown;
    plain: typeof $plain;
    array: typeof $array;
}

export declare const integrate: integrateAPI;