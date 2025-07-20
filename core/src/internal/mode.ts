import { InternalZuordCore as Internal } from "./index";

export const modeField = <K extends string>(key: K | K[], value: boolean = false): Internal.ModeField<K> => {
    if (Array.isArray(key)) {
        const obj = {} as Internal.ModeField<K>;   
        for (const k of key) 
            obj[k] = value;
        return obj;
    } else {
        return { [key]: value } as Internal.ModeField<K>;
    }
}

export const modeResolve = <const TModes extends Internal.ModeField[]>(modes: TModes): Internal.ModeResolve<TModes> => {
    return Object.assign({}, ...modes);
};

export const shallowMode: Internal.ShallowMode = {
    shallow: false,
}

export const concatMode: Internal.ConcatMode = {
    concat: false,
}

export const defaultMode: Internal.DefaultMode = modeResolve([shallowMode]);