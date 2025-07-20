import { Mode, ModeOf } from "./mode.types";

export const mode = <K extends string>(key: K, value: boolean = false) : Mode<K> => {
    return { [key]: value } as Mode<K>;
}

export const modeOf = <const TOf extends Mode[]>(modes: TOf): ModeOf<TOf> => {
    return Object.assign({}, ...modes);
};