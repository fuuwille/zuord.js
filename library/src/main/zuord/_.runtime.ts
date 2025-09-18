import { $zuord } from "../../internal";
import type { Zuord } from ".";

export function modeRecord <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : Zuord.ModeRecord<K, V>

export function modeRecord <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : Zuord.ModeRecord<K, V>

export function modeRecord <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : Zuord.ModeRecord<K, V>;

export function modeRecord <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return $zuord.modeRecord(key, value ?? false) as Zuord.ModeRecord<K, V>;
}

export function modeResolve <const TModes extends Zuord.ModeRecord[]>(modes: TModes) {
    return $zuord.modeResolve(modes) as Zuord.ModeResolve<TModes>;
};