import type { $ZuordCore } from "@zuord/core/internal";

export declare namespace Flags {
    export type Shallow = $ZuordCore.Mode.Flags<"shallow">;

    export type Concat = $ZuordCore.Mode.Flags<"concat">;

    export type Unique = $ZuordCore.Mode.Flags<"unique">;

    export type Base = $ZuordCore.Mode.Resolve<[Flags.Shallow]>;
}