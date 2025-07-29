import { Mode } from "./mode.types";

export declare namespace Flags {
    export type Shallow = Mode.Flag<"shallow">;
    
    export type Concat = Mode.Flag<"concat">;
    
    export type Unique = Mode.Flag<"unique">;
    
    export type Base = Mode.Resolve<[Flags.Shallow]>;
}