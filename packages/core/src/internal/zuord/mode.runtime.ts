import { Mode } from "./mode.types";

export const flags = <const K, const V>(key: K | K[], value: V) => {
    let field : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        field[k as string] = value as boolean;
    }

    return field as Mode.Flags<K, V>;
}

export const resolve = <const TModes extends Mode.Flags[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as Mode.Resolve<TModes>;
};