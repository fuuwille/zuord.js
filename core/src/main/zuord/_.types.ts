import { $ZuordCore } from "../../internal";

export type ModeRecord<K extends string = string, V extends boolean = boolean> = $ZuordCore.ModeRecord<K, V>;

export type ModeResolve<TModes extends ModeRecord[]> = $ZuordCore.ModeResolve<TModes>;

export type ModeBundle<TMode extends ModeRecord = ModeRecord> = $ZuordCore.ModeBundle<TMode>;