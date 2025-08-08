import { $ZuordUtil } from "../internal";
import { ZuordType } from "@zuord/type";

export namespace Strict {
    export type Keys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = $ZuordUtil.Strict.ResolveKeys<TBase, TContent>;

    export type KeysBatch<TBase extends ZuordType.Plain, TContents extends ZuordType.PlainArray> 
        = $ZuordUtil.Strict.ResolveKeysBatch<TBase, TContents> extends infer T extends ZuordType.PlainArray ? T : never
}