import { InternalZuordCore as Internal } from ".";

const flag = <const K, const V>(key: K | K[], value: V) => {
    let field : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        field[k as string] = value as boolean;
    }

    return field as Internal.Mode.Flag<K, V>;
}

const resolve = <const TModes extends Internal.Mode.Flag[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as Internal.Mode.Resolve<TModes>;
};

type mode = {
    flag: typeof flag;
    resolve: typeof resolve;
}

export const mode: mode = {
    flag,
    resolve
}