import { $zuordCore } from "../../internal";
import type { ZuordCore } from ".";

export { mode } from "./mode";

export function modeRecord <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ZuordCore.ModeRecord<K, V>

export function modeRecord <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ZuordCore.ModeRecord<K, V>

export function modeRecord <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ZuordCore.ModeRecord<K, V>;

export function modeRecord <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return $zuordCore.modeRecord(key, value ?? false) as ZuordCore.ModeRecord<K, V>;
}

export function modeResolve <const TModes extends ZuordCore.ModeRecord[]>(modes: TModes) {
    return $zuordCore.modeResolve(modes) as ZuordCore.ModeResolve<TModes>;
};