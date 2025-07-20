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

export const shallowMode = modeField("shallow", false) satisfies Internal.ShallowMode;

export const concatMode = modeField("concat", false) satisfies Internal.ConcatMode;

export const baseMode = modeResolve([shallowMode]) satisfies Internal.BaseMode;