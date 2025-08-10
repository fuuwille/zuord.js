import { ZuordType as Type } from "./type";

export namespace Array {
    export type Nest<T extends unknown = unknown> = Type.Array<Type.Array<T>>;
}