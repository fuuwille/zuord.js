import { InternalZuordCore } from "./internal";

export type Mode<K extends string = string, V extends unknown = boolean> = InternalZuordCore.Mode<K, V>;

export type ShallowMode = Mode<"shallow">;