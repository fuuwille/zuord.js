import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export declare namespace Restrict {
    export type Keys<TBase extends Type.Plain, TInput extends Type.Plain> 
        = $ZuordUtil.Restrict.ResolveKeys<TBase, TInput>

    export type KeysBatch<TBase extends Type.Plain, TInputs extends Type.PlainArray> 
        = $ZuordUtil.Restrict.ResolveKeysBatch<TBase, TInputs> extends infer T extends Type.PlainArray ? T : never
}