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
    }) extends infer V ? V : never;

    export type ArrayResolve<T> = (
        T extends ZuordType.Array<infer U> ?  Mutable.Resolve<U>[] : never
    );
}