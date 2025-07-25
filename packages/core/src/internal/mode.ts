import { BaseMode, ConcatMode, ModeField, ModeResolve, ShallowMode } from "./mode.types";

export const modeField = <const K, const V>(key: K | K[], value: V) => {
    let field : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        field[k as string] = value as boolean;
    }

    return field as ModeField<K, V>;
}

export const modeResolve = <const TModes extends ModeField[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as ModeResolve<TModes>;
};

export const shallowMode = modeField("shallow", false) satisfies ShallowMode;

export const concatMode = modeField("concat", false) satisfies ConcatMode;

export const baseMode = modeResolve([shallowMode]) satisfies BaseMode;