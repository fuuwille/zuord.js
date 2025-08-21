import type { $ZuordUtil } from "../internal";
import type { ZuordType, ZuordPlain } from "@zuord/type";

export declare namespace Restrict {
    export type Keys<TBase extends ZuordType.Plain, TInput extends ZuordType.Plain> 
        = $ZuordUtil.Restrict.ResolveKeys<TBase, TInput>

    export type KeysBatch<TBase extends ZuordType.Plain, TInputs extends ZuordPlain.Array> 
        = $ZuordUtil.Restrict.ResolveKeysBatch<TBase, TInputs> extends infer T extends ZuordPlain.Array ? T : never
}