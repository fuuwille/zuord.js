import { plain as $plain } from "./index.runtime";
import { array as $array } from "./index.runtime";

type integrateAPI = {
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

export declare const integrate: integrateAPI;

export { Integrate } from "./index.types";