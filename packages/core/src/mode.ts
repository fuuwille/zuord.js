import { internalZuordCore as internal } from "./internal";
import { ZuordCore } from ".";
import { ShallowMode, ConcatMode, BaseMode, UniqueMode } from "./mode.types";

function flag <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : ZuordCore.Mode.Field<K, V>

function flag <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : ZuordCore.Mode.Field<K, V>

function flag <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : ZuordCore.Mode.Field<K, V>;

function flag <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return internal.mode.flag(key, value ?? false) as ZuordCore.Mode.Field<K, V>;
}

function resolve <const TModes extends ZuordCore.Mode.Field[]>(modes: TModes): ZuordCore.Mode.Resolve<TModes> {
    return internal.mode.resolve(modes);
};

export const shallowMode = flag("shallow", false) satisfies ShallowMode;

export const concatMode = flag("concat", false) satisfies ConcatMode;

export const uniqueMode = flag("unique", false) satisfies UniqueMode;

export const baseMode = resolve([shallowMode]) satisfies BaseMode;

//

type mode = {
    readonly flag: typeof flag;
    readonly resolve: typeof resolve;
}

export const mode: mode = {
    flag,
    resolve
};