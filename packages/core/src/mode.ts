import { internalZuordCore as internal } from "./internal";
import { ModeField, ModeResolve, ShallowMode, ConcatMode, BaseMode, UniqueMode } from "./mode.types";

export function modeField <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ModeField<K, V>

export function modeField <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ModeField<K, V>

export function modeField <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ModeField<K, V>;

export function modeField <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return internal.mode.field(key, value ?? false) as ModeField<K, V>;
}

export function modeResolve <const TModes extends ModeField[]>(modes: TModes): ModeResolve<TModes> {
    return internal.mode.resolve(modes);
};

export const shallowMode = modeField("shallow", false) satisfies ShallowMode;

export const concatMode = modeField("concat", false) satisfies ConcatMode;

export const uniqueMode = modeField("unique", false) satisfies UniqueMode;

export const baseMode = modeResolve([shallowMode]) satisfies BaseMode;