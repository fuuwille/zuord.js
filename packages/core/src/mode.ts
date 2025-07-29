import { internalZuordCore as internal } from "./internal";
import { ModeField, ModeResolve, ShallowMode, ConcatMode, BaseMode, UniqueMode } from "./mode.types";

function field <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ModeField<K, V>

function field <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ModeField<K, V>

function field <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ModeField<K, V>;

function field <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return internal.mode.field(key, value ?? false) as ModeField<K, V>;
}

function resolve <const TModes extends ModeField[]>(modes: TModes): ModeResolve<TModes> {
    return internal.mode.resolve(modes);
};

export const shallowMode = field("shallow", false) satisfies ShallowMode;

export const concatMode = field("concat", false) satisfies ConcatMode;

export const uniqueMode = field("unique", false) satisfies UniqueMode;

export const baseMode = resolve([shallowMode]) satisfies BaseMode;

//

type mode = {
    readonly field: typeof field;
    readonly resolve: typeof resolve;
}

export const mode: mode = {
    field,
    resolve
};