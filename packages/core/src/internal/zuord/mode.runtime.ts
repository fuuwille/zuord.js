import type { $ZuordCore } from "@zuord/core/internal";

export const flags = <const K, const V>(key: K | K[], value: V) => {
    let field : Record<string, boolean> = {};

    const keys = Array.isArray(key) ? key : [key];
    for (const k of keys) {
        field[k as string] = value as boolean;
    }

    return field as $ZuordCore.Mode.Flags<K, V>;
}

export const resolve = <const TModes extends $ZuordCore.Mode.Flags[]>(modes: TModes) => {
    return Object.assign({}, ...modes) as $ZuordCore.Mode.Resolve<TModes>;
};