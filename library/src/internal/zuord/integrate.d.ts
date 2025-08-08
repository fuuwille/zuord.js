import { any as $any } from "./integrate.runtime";
import { plain as $plain } from "./integrate.runtime";
import { array as $array } from "./integrate.runtime";

type integrateAPI = {
    any: typeof $any;
    plain: typeof $plain;
    array: typeof $array;
}

export declare const integrate: integrateAPI;

export { Integrate } from "./integrate.types";