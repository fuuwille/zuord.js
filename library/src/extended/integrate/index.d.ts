import * as $integrate from "./alias";
import type * as $Integrate from "./alias.types";

type integrateAPI = {
    readonly plain: typeof $integrate.plain;
    readonly array: typeof $integrate.array;
}

export declare const integrate: integrateAPI;

export declare namespace Integrate {
    export import Plain = $Integrate.Plain;
    export import Array = $Integrate.Array;
}