import type { $ZuordCore } from ".";

export const modeRecord = <const K, const V>(key: K | K[], value: V) => {
    let record : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        record[k as string] = value as boolean;
    }

    return record as $ZuordCore.ModeRecord<K, V>;
}

export const modeResolve = <const TModes extends $ZuordCore.ModeRecord[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as $ZuordCore.ModeResolve<TModes>;
};