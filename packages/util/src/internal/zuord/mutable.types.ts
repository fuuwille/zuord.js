import { ZuordType } from "@zuord/type";
 
export namespace Mutable {
    export type Resolve<T> = (
        T extends ZuordType.Plain | ZuordType.Tuple ? (
            StructResolve<T>
        ) :
        T extends ZuordType.Array ? ( 
            ArrayResolve<T>
        ) : T
    )

    export type StructResolve<T> = ({ 
        -readonly [K in keyof T]: Mutable.Resolve<T[K]> 
    })

    export type ArrayResolve<T extends ZuordType.Array> = (
        T extends ZuordType.ArrayOf<infer U> ?  Mutable.Resolve<U>[] : never
    );
}