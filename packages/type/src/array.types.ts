import type { ZuordType } from "@zuord/type";

export namespace ZuordArray {
    export type Nest<T extends unknown = unknown> = ZuordType.Array<ZuordType.Array<T>>;
    
    export type Empty = readonly [];
}