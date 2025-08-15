import { ZuordType as Type } from "./type";

export namespace ZuordArray {
    export type Nest<T extends unknown = unknown> = Type.Array<Type.Array<T>>;
    
    export type Empty = readonly [];
}