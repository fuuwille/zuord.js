import { Mode, ModeOf } from "./mode.types";

export function mode <K extends string>(key: K, value: boolean = false) : Mode<K> {
    return { [key]: value } as Mode<K>;
}

export function modeOf <const TOf extends Mode[]>(modes: TOf): ModeOf<TOf> {
    return Object.assign({}, ...modes);
};