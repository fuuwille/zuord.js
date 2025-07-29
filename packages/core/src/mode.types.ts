import { InternalZuordCore as Internal } from "./internal";

export namespace Mode {
    export type Field<K extends string = string, V extends boolean = boolean> = Internal.Mode.Flag<K, V>;

    export type Resolve<TModes extends Mode.Field[]> = Internal.Mode.Resolve<TModes>;
}

export type ShallowMode = Mode.Field<"shallow">;

export type ConcatMode = Mode.Field<"concat">;

export type UniqueMode = Mode.Field<"unique">;

export type BaseMode = Mode.Resolve<[ShallowMode]>;