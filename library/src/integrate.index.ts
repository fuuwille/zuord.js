import * as module from "./integrate";
type IntegrateAPI = typeof module;

let moduleCached: IntegrateAPI | null = null;
const functionCache = new Map<keyof IntegrateAPI, Function>();

export const integrate : IntegrateAPI = new Proxy({} as IntegrateAPI, {
    get(_target, prop: keyof IntegrateAPI) {
        if (!moduleCached) {
            moduleCached = module;
        }

        const value = moduleCached[prop];
        if (typeof value === "function") {
            if (!functionCache.has(prop)) {
                functionCache.set(prop, value.bind(moduleCached));
            }
            return functionCache.get(prop);
        }

        return value;
    }
});

export { Integrate } from "./integrate.types";