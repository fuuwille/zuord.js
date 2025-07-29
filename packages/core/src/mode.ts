import { internalZuordCore as internal } from "./internal";
import { ZuordCore } from ".";
import { ShallowMode, ConcatMode, BaseMode, UniqueMode } from "./mode.types";

function field <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ZuordCore.Mode.Field<K, V>

function field <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ZuordCore.Mode.Field<K, V>

function field <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ZuordCore.Mode.Field<K, V>;

function field <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return internal.mode.field(key, value ?? false) as ZuordCore.Mode.Field<K, V>;
}

function resolve <const TModes extends ZuordCore.Mode.Field[]>(modes: TModes): ZuordCore.Mode.Resolve<TModes> {
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