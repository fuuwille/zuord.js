import { plain as $plain } from "./index.runtime";

type evolveAPI = {
    readonly plain: typeof $plain;
}

export declare const evolve: evolveAPI;

export { Evolve } from "./index.types";