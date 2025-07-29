import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";

export namespace Merge {
    export type Object<TContent, TMode> = (
        TContent extends ZuordType.Tuple  ? (
            ObjectFromTuple<TContent, TMode>
        ) : 
        TContent extends ZuordType.Array ? (
            ObjectFromArray<TContent, TMode>
        ) : never
    );

    export type ObjectFromTuple<TContent, TMode> = (
        TContent extends [...infer TRest, infer TLast] ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Object<TRest[0], TLast, TMode> 
            : Integrate.Object<ObjectFromTuple<TRest, TMode>, TLast, TMode>
        ) : never
    );

    export type ObjectFromArray<TContent, TMode> = TContent extends readonly (infer TInfer)[] ? (
        ZuordType.PlainAsRequired<TInfer> extends infer TRequired ? (
            ZuordType.UnionToTuple<TRequired> extends infer TNormalized ? (
                ObjectFromTuple<TNormalized, TMode> 
            ) : never
        ) : never
    ) : never;
}