import type { FundType } from "@zuord/type";
 
export type Resolve<T> = (
    T extends FundType.Plain | FundType.Tuple ? (
        StructResolve<T>
    ) :
    T extends FundType.Array ? ( 
        ArrayResolve<T>
    ) : T
)

export type StructResolve<T> = ({ 
    -readonly [K in keyof T]: Resolve<T[K]> 
}) extends infer V ? V : never;

export type ArrayResolve<T> = (
    T extends FundType.Array<infer U> ?  Resolve<U>[] : never
);