import * as module from "./integrate";
type IntegrateAPI = {
    plain: typeof module.plain,
    plainLoose: typeof module.plainLoose,
    plainStrict: typeof module.plainStrict,
    array: typeof module.array,
    defaultMode: typeof module.defaultMode
};

export const integrate : IntegrateAPI = new Proxy({} as IntegrateAPI, {
    get(_target, prop: keyof IntegrateAPI) {
        return module[prop];
    }
});

export { Integrate } from "./integrate.types";