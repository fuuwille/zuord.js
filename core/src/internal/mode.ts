import { InternalZuordCore as Internal } from "./index";

export const mode = <K extends string>(key: K | K[], value: boolean = false): Internal.Mode<K> => {
    if (Array.isArray(key)) {
        const obj = {} as Internal.Mode<K>;   
        for (const k of key) 
            obj[k] = value;
        return obj;
    } else {
        return { [key]: value } as Internal.Mode<K>;
    }
}

export const modeResolve = <const TModes extends Internal.Mode[]>(modes: TModes): Internal.ModeResolve<TModes> => {
    return Object.assign({}, ...modes);
};

export const shallowMode: Internal.ShallowMode = {
    shallow: false,
}

export const concatMode: Internal.ConcatMode = {
    concat: false,
}

export const defaultMode: Internal.DefaultMode = modeResolve([shallowMode]);