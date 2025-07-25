import { internalZuordCore as internal } from "./internal";
import { ModeField, ModeResolve, ShallowMode, ConcatMode, BaseMode } from "./mode.types";

export function modeField <K extends string, const V extends boolean>(key: K, value?: V) : ModeField<K>

export function modeField <K extends string, const V extends boolean>(key: K[], value?: V) : ModeField<K>

export function modeField <K extends string, const V extends boolean>(key: K | K[], value?: V) : ModeField<K>;

export function modeField <K extends string, const V extends boolean>(key: K | K[], value?: V) {
    return internal.modeField(key, value ?? false) as ModeField<K, V>;
}

export function modeResolve <const TModes extends ModeField[]>(modes: TModes): ModeResolve<TModes> {
    return internal.modeResolve(modes);
};

export const shallowMode = internal.shallowMode satisfies ShallowMode;

export const concatMode = internal.concatMode satisfies ConcatMode;

export const baseMode = internal.baseMode satisfies BaseMode;