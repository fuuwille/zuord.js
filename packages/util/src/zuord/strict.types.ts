import type { $ZuordUtil } from "../internal";
import type { ZuordType, ZuordPlain } from "@zuord/type";

export declare namespace Strict {
    export type Keys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = $ZuordUtil.Strict.ResolveKeys<TBase, TContent>;

    export type KeysBatch<TBase extends ZuordType.Plain, TContents extends ZuordPlain.Array> 
        = $ZuordUtil.Strict.ResolveKeysBatch<TBase, TContents> extends infer T extends ZuordPlain.Array ? T : never
}