import { mode as _mode } from "./internal/mode";
import { Mode } from "./mode.types";


function flag <K extends string, const V extends boolean = false>(key: K, value?: V) 
    : Mode.Field<K, V>

function flag <K extends string, const V extends boolean = false>(key: K[], value?: V) 
    : Mode.Field<K, V>

function flag <K extends string, const V extends boolean = false>(key: K | K[], value?: V) 
    : Mode.Field<K, V>;

function flag <K extends string, const V extends boolean = false>(key: K | K[], value?: V) {
    return _mode.flag(key, value ?? false) as Mode.Field<K, V>;
}

function resolve <const TModes extends Mode.Field[]>(modes: TModes): Mode.Resolve<TModes> {
    return _mode.resolve(modes);
};

//

type mode = {
    readonly flag: typeof flag;
    readonly resolve: typeof resolve;
}

export const mode: mode = {
    flag,
    resolve
};