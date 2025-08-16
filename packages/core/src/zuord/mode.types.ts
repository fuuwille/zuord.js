import { $ZuordCore } from "../internal/zuord";

export declare namespace Mode {
    export type Flags<K extends string = string, V extends boolean = boolean> = $ZuordCore.Mode.Flags<K, V>;

    export type Resolve<TModes extends Mode.Flags[]> = $ZuordCore.Mode.Resolve<TModes>;
}