import { InternalZuordCore as Internal } from "./index";

export const modeField = <const K extends string, const V extends boolean>(key: K | K[], value: V) => {
    let field = {} as Internal.ModeField<K, V>;

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) field[k] = value;

    return field;
}

export const modeResolve = <const TModes extends Internal.ModeField[]>(modes: TModes): Internal.ModeResolve<TModes> => {
    return Object.assign({}, ...modes);
};

export const shallowMode = modeField("shallow", false) satisfies Internal.ShallowMode;

export const concatMode = modeField("concat", false) satisfies Internal.ConcatMode;

export const baseMode = modeResolve([shallowMode]) satisfies Internal.BaseMode;