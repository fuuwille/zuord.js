import { InternalZuordCore as Internal } from "./index";

export const modeField = <const K extends string, const V extends boolean>(key: K | K[], value: V): Internal.ModeField<K, V> => {
    if (Array.isArray(key)) {
        const obj = {} as Internal.ModeField<K, V>;   
        for (const k of key) 
            obj[k] = value;
        return obj;
    } else {
        return { [key]: value } as Internal.ModeField<K ,V>;
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

export const defaultMode: Internal.BaseMode = modeResolve([shallowMode]);