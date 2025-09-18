import { $Zuord } from "../../internal";

export type ModeRecord<K extends string = string, V extends boolean = boolean> = $Zuord.ModeRecord<K, V>;

export type ModeResolve<TModes extends ModeRecord[]> = $Zuord.ModeResolve<TModes>;