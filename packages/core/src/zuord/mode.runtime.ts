import { $zuordCore } from "../internal/zuord";
import { Mode } from "./mode.types";


export function flags <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : Mode.Flags<K, V>

export function flags <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : Mode.Flags<K, V>

export function flags <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : Mode.Flags<K, V>;

export function flags <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return $zuordCore.mode.flags(key, value ?? false) as Mode.Flags<K, V>;
}

export function resolve <const TModes extends Mode.Flags[]>(modes: TModes): Mode.Resolve<TModes> {
    return $zuordCore.mode.resolve(modes);
};