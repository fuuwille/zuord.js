import { Mode } from "./mode.types";

export const mode = <K extends string>(key: K, value: boolean = false) : Mode<K> => {
    return { [key]: value } as Mode<K>;
}