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

    let result = false;

    if(typeof key == "string") {
        result = mode[key] ?? false;
    }
    else if(Array.isArray(key)) {
        result = true;

        for (const key in mode) {
            if (typeof key != "string") {
                throw new TypeError("Each key must be a string.");
            }

            if(mode[key] === false) {
                result = false;
                break;
            }   
        }
    }
    else {
        throw new TypeError("Key must be a string or an array of strings.");
    }

    return result as ModeOn<TMode, TKey>;
}

const isModeField = (value: unknown): value is ModeField => {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    return Object.values(value).every(v => typeof v === "boolean");
}