import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export declare namespace Restrict {
    export type Keys<TBase extends Type.Plain, TInput extends Type.Plain> 
        = $ZuordUtil.Restrict.Keys<TBase, TInput>

    export type ListKeys<TBase extends Type.Plain, TInputs extends Type.PlainArray> 
        = $ZuordUtil.Restrict.ListKeys<TBase, TInputs> extends infer T extends Type.PlainTuple ? T : never
}