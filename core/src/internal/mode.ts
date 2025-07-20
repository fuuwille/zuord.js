import { InternalZuordCore as Internal } from "./index";

export function mode <K extends string>(key: K, value?: boolean) : Internal.Mode<K>

export function mode <K extends string>(key: K[], value?: boolean) : Internal.Mode<K>

export function mode <K extends string>(key: K | K[], value?: boolean) : Internal.Mode<K>;

export function mode <K extends string>(key: K | K[], value: boolean = false) : Internal.Mode<K> {
    if (Array.isArray(key)) {
        const obj = {} as Internal.Mode<K>;   
        for (const k of key) 
            obj[k] = value;
        return obj;
    } else {
        return { [key]: value } as Internal.Mode<K>;
    }
}

export function modeOf <const TOf extends Internal.Mode[]>(modes: TOf): Internal.ModeOf<TOf> {
    return Object.assign({}, ...modes);
};