import * as module from "./integrate";
type IntegrateAPI = typeof module;

let moduleCached: IntegrateAPI | null = null;

export const integrate : IntegrateAPI = new Proxy({} as IntegrateAPI, {
    get(_target, prop: keyof IntegrateAPI) {
        if (!moduleCached) {
            moduleCached = module;
        }

        const value = moduleCached[prop];
        if (typeof value === "function") {
            return value.bind(moduleCached);
        }

        return value;
    }
});

export { Integrate } from "./integrate.types";