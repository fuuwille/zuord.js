import { Mode as _Mode } from "./internal/mode.types";

export declare namespace Mode {
    export type Flags<K extends string = string, V extends boolean = boolean> = _Mode.Flag<K, V>;

    export type Resolve<TModes extends Mode.Flags[]> = _Mode.Resolve<TModes>;
}