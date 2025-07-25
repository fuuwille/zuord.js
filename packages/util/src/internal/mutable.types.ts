import { ZuordType } from "@zuord/type";
 
export type Mutable<T> = (
    T extends ZuordType.Plain | ZuordType.Tuple ? (
        { -readonly [K in keyof T]: Mutable<T[K]> }
    ) :
    T extends ZuordType.ArrayOf<infer U> ? ( 
        Mutable<U>[]
    ) : T
)