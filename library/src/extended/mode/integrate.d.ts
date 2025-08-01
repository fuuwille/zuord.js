export { plain as $plain } from "./integrate.runtime";
export { array as $array } from "./integrate.runtime";

type integrateAPI = {
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

export declare const integrate: integrateAPI;

export { Integrate } from "./integrate.types";