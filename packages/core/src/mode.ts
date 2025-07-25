import { internalZuordCore as internal } from "./internal";
import { ModeField, ModeResolve, ShallowMode, ConcatMode, BaseMode } from "./mode.types";

export function modeField <K extends string>(key: K, value?: boolean) : ModeField<K>

export function modeField <K extends string>(key: K[], value?: boolean) : ModeField<K>

export function modeField <K extends string>(key: K | K[], value?: boolean) : ModeField<K>;

export function modeField <K extends string>(key: K | K[], value: boolean = false) : ModeField<K> {
    return internal.modeField(key, value);
}

export function modeResolve <const TModes extends ModeField[]>(modes: TModes): ModeResolve<TModes> {
    return internal.modeResolve(modes);
};

export const shallowMode = internal.shallowMode satisfies ShallowMode;

export const concatMode = internal.concatMode satisfies ConcatMode;

export const baseMode = internal.baseMode satisfies BaseMode;