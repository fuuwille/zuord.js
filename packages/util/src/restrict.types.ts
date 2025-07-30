import { Restrict as $Restrict } from "./internal/restrict.types";
import { ZuordType as Type } from "@zuord/type";

export declare namespace Restrict {
    export type Keys<TBase extends Type.Plain, TInput extends Type.Plain> =  $Restrict.Keys<TBase, TInput>
}