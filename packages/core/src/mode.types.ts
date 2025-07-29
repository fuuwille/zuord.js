import { Mode as _Mode } from "./internal/mode.types";

export declare namespace Mode {
    export type Field<K extends string = string, V extends boolean = boolean> = _Mode.Flag<K, V>;

    export type Resolve<TModes extends Mode.Field[]> = _Mode.Resolve<TModes>;
}