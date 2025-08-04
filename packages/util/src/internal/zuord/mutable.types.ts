import { ZuordType } from "@zuord/type";
 
export namespace Mutable {
    export type Resolve<T> = (
        T extends ZuordType.Plain | ZuordType.Tuple ? (
            { -readonly [K in keyof T]: Mutable.Resolve<T[K]> }
        ) :
        T extends ZuordType.ArrayOf<infer U> ? ( 
            Mutable.Resolve<U>[]
        ) : T
    )
}