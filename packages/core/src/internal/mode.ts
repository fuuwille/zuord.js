import { ModeField, ModeResolve, ModeOn } from "./mode.types";

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

export const modeOn = <TMode, TKey>(mode: TMode, key: TKey | TKey[]) => {
    if(!isModeField(mode)) {
        throw new TypeError("Mode must be an object.");
    }

    if(typeof key == "string") {
        return mode[key] ?? false as ModeOn<TMode, TKey>;
    }
}

const isModeField = (value: unknown): value is ModeField => {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    return Object.values(value).every(v => typeof v === "boolean");
}