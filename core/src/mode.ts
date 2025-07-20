import { ZuordCore } from ".";
import { internalZuordCore as internal } from "./internal";

export function mode <K extends string>(key: K, value?: boolean) : ZuordCore.Mode<K>

export function mode <K extends string>(key: K[], value?: boolean) : ZuordCore.Mode<K>

export function mode <K extends string>(key: K | K[], value?: boolean) : ZuordCore.Mode<K>;

export function mode <K extends string>(key: K | K[], value: boolean = false) : ZuordCore.Mode<K> {
    return internal.mode(key, value);
}

export function modeOf <const TOf extends ZuordCore.Mode[]>(modes: TOf): ZuordCore.ModeOf<TOf> {
    return internal.modeOf(modes);
};