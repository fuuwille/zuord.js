import type { plain as $plain } from "./index.runtime";

type evolveAPI = {
    readonly plain: typeof $plain;
}

export declare const evolve: evolveAPI;

export * as Evolve from "./index.types";