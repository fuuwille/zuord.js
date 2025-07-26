import { internalZuordCore as internal } from "./internal";
import { ModeField, ModeResolve, ModeOn, ShallowMode, ConcatMode, BaseMode, UniqueMode, StrictMode } from "./mode.types";

export function modeField <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ModeField<K, V>

export function modeField <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ModeField<K, V>

export function modeField <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ModeField<K, V>;

export function modeField <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return internal.modeField(key, value ?? false) as ModeField<K, V>;
}

export function modeResolve <const TModes extends ModeField[]>(modes: TModes): ModeResolve<TModes> {
    return internal.modeResolve(modes);
};

export function modeOn <TMode extends ModeField, TKey extends string>(mode: TMode, key: TKey) 
    : ModeOn<TMode, TKey>;

export function modeOn <TMode extends ModeField, TKey extends string>(mode: TMode, key: TKey[])
    : ModeOn<TMode, TKey>;

export function modeOn <TMode extends ModeField, TKey extends string>(mode: TMode, key: TKey | TKey[])
    : ModeOn<TMode, TKey>;

export function modeOn <TMode extends ModeField, TKey extends string>(mode: TMode, key: TKey | TKey[]) : ModeOn<TMode, TKey> {
    return internal.modeOn(mode, key);
}

export const shallowMode = modeField("shallow", false) satisfies ShallowMode;

export const strictMode = modeField("strict", false) satisfies StrictMode;

export const concatMode = modeField("concat", false) satisfies ConcatMode;

export const uniqueMode = modeField("unique", false) satisfies UniqueMode;

export const baseMode = modeResolve([shallowMode, strictMode]) satisfies BaseMode;