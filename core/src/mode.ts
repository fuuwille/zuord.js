import { Mode } from "./mode.types";

export const mode = <K extends string>(key: K, value: boolean = false) : Mode<K> => {
    return { [key]: value } as Mode<K>;
}

export const modeOf = (modes: Mode[]): Mode => {
    return Object.assign({}, ...modes);
};