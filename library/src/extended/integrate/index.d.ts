import { plain, array } from "./alias";
import type { Plain as $Plain, Array as $Array } from "./alias.types";

export declare const integrate: {
    readonly plain: typeof plain;
    readonly array: typeof array;
};

export declare namespace Integrate {
    export import Plain = $Plain;
    export import Array = $Array;
}