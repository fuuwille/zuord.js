import type { $ZuordUtil } from "@zuord/util/internal";
import { ZuordType, ZuordPlain } from "@zuord/type";

export namespace Strict {
    export type Keys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = $ZuordUtil.Strict.ResolveKeys<TBase, TContent>;

    export type KeysBatch<TBase extends ZuordType.Plain, TContents extends ZuordPlain.Array> 
        = $ZuordUtil.Strict.ResolveKeysBatch<TBase, TContents> extends infer T extends ZuordPlain.Array ? T : never
}