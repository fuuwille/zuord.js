import { $zuordCore } from "../internal";
import type { ZuordCore } from "..";

export function flags <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ZuordCore.Mode.Flags<K, V>

export function flags <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ZuordCore.Mode.Flags<K, V>

export function flags <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ZuordCore.Mode.Flags<K, V>;

export function flags <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return $zuordCore.mode.flags(key, value ?? false) as ZuordCore.Mode.Flags<K, V>;
}

export function resolve <const TModes extends ZuordCore.Mode.Flags[]>(modes: TModes) {
    return $zuordCore.mode.resolve(modes) as ZuordCore.Mode.Resolve<TModes>;
};