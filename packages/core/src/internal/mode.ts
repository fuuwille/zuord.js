import { ModeField, ModeResolve } from "./mode.types";

const field = <const K, const V>(key: K | K[], value: V) => {
    let field : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        field[k as string] = value as boolean;
    }

    return field as ModeField<K, V>;
}

const resolve = <const TModes extends ModeField[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as ModeResolve<TModes>;
};

type mode = {
    field: typeof field;
    resolve: typeof resolve;
}

export const mode: mode = {
    field,
    resolve
}