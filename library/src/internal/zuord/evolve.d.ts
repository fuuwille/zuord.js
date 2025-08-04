import { unknown as $unknown } from "./evolve.runtime";
import { plain as $plain } from "./evolve.runtime";
import { array as $array } from "./evolve.runtime";

type evolveAPI = {
    readonly unknown: typeof $unknown;
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

export declare const evolve: evolveAPI;