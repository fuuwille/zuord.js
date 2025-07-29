import { InternalZuordCore as Internal } from ".";

export namespace Flags {
    export type Shallow = Internal.Mode.Flag<"shallow">;
    
    export type Concat = Internal.Mode.Flag<"concat">;
    
    export type Unique = Internal.Mode.Flag<"unique">;
    
    export type Base = Internal.Mode.Resolve<[Flags.Shallow]>;
}