import type { $ZuordCore } from "../../internal";

export type { Mode } from "./mode";

export type ModeRecord<K extends string = string, V extends boolean = boolean> = $ZuordCore.ModeRecord<K, V>;

export type ModeResolve<TModes extends ModeRecord[]> = $ZuordCore.ModeResolve<TModes>;