import { Mode } from "./mode.types";

export declare namespace Flags {
    export type Shallow = Mode.Flags<"shallow">;
    
    export type Concat = Mode.Flags<"concat">;
    
    export type Unique = Mode.Flags<"unique">;
    
    export type Base = Mode.Resolve<[Flags.Shallow]>;
}