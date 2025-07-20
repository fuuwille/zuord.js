import { ZuordCore } from ".";
import { internalZuordCore as internal } from "./internal";

export function mode <K extends string>(key: K, value?: boolean) : ZuordCore.Mode<K>

export function mode <K extends string>(key: K[], value?: boolean) : ZuordCore.Mode<K>

export function mode <K extends string>(key: K | K[], value?: boolean) : ZuordCore.Mode<K>;

export function mode <K extends string>(key: K | K[], value: boolean = false) : ZuordCore.Mode<K> {
    return internal.mode(key, value);
}

export function modeOf <const TModes extends ZuordCore.Mode[]>(modes: TModes): ZuordCore.ModeOf<TModes> {
    return internal.modeOf(modes);
};