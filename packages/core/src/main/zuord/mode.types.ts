import type { $ZuordCore } from "../../internal";

export type Flags<K extends string = string, V extends boolean = boolean> = $ZuordCore.Mode.Flags<K, V>;

export type Resolve<TModes extends Flags[]> = $ZuordCore.Mode.Resolve<TModes>;